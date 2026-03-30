import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Server-side validation patterns (mirror client-side)
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^[+]?[\d\s()-]{7,20}$/;
const GIBBERISH_PATTERN = /(.)\1{3,}/;
const KEYBOARD_MASH_PATTERN = /(?:asdf|qwert|zxcv|1234|aaaa|abcd|jkl;)/i;
const MIN_FORM_TIME_MS = 5000; // 5 seconds — must match client

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // ── Anti-bot checks ──────────────────────────────────────────
    // 1. Honeypot: if the hidden field was filled, it's a bot
    if (body._hp) {
      // Return 200 so bot thinks it succeeded — don't send email
      return NextResponse.json(
        { message: 'Vendor registration submitted successfully' },
        { status: 200 }
      );
    }

    // 2. Timing check: bots fill forms instantly
    if (typeof body._ft === 'number' && body._ft < MIN_FORM_TIME_MS) {
      return NextResponse.json(
        { error: 'Submission rejected. Please take your time filling out the form.' },
        { status: 429 }
      );
    }

    // Strip anti-bot metadata from the payload before further processing
    const { _hp, _ft, ...formData } = body;

    // ── Validate required fields ─────────────────────────────────
    const requiredFields = [
      { key: 'companyName', label: 'Company name' },
      { key: 'contactEmail', label: 'Email address' },
      { key: 'crNumber', label: 'C.R. number' },
      { key: 'addressLine1', label: 'Address' },
      { key: 'mobile', label: 'Mobile number' },
      { key: 'contactPerson', label: 'Contact person' },
    ];

    const missingFields = requiredFields
      .filter(f => !formData[f.key]?.trim())
      .map(f => f.label);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // ── Format validation ────────────────────────────────────────
    if (!EMAIL_PATTERN.test(formData.contactEmail.trim())) {
      return NextResponse.json(
        { error: 'Invalid email address format' },
        { status: 400 }
      );
    }

    if (!PHONE_PATTERN.test(formData.mobile.trim())) {
      return NextResponse.json(
        { error: 'Invalid mobile number format' },
        { status: 400 }
      );
    }

    // Check for gibberish in key fields
    const fieldsToCheckGibberish = ['companyName', 'contactPerson', 'addressLine1'];
    for (const fieldName of fieldsToCheckGibberish) {
      const val = formData[fieldName]?.trim() || '';
      if (val && (GIBBERISH_PATTERN.test(val) || KEYBOARD_MASH_PATTERN.test(val))) {
        return NextResponse.json(
          { error: `Invalid value in ${fieldName}. Please enter meaningful information.` },
          { status: 400 }
        );
      }
    }

    // Validate email configuration
    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
      console.error('Email configuration missing:', {
        hasUser: !!process.env.EMAIL_USER,
        hasPassword: !!process.env.EMAIL_APP_PASSWORD,
      });
      return NextResponse.json(
        { error: 'Email service not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Check if EMAIL_USER is still a placeholder
    if (process.env.EMAIL_USER === 'your-email@gmail.com' || process.env.EMAIL_USER.includes('your-email')) {
      console.error('EMAIL_USER is still set to placeholder value');
      return NextResponse.json(
        { 
          error: 'Email service not properly configured. Please update EMAIL_USER in .env.local with your actual Gmail address.',
          details: process.env.NODE_ENV === 'development' ? 'EMAIL_USER is set to placeholder: your-email@gmail.com' : undefined
        },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Format the email content
    const formatField = (label: string, value: string) => {
      return value ? `<tr><td style="padding: 8px; font-weight: bold; color: #1C2833; width: 200px;">${label}:</td><td style="padding: 8px;">${value || 'N/A'}</td></tr>` : '';
    };

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT || 'info@petrozin.com',
      replyTo: formData.contactEmail,
      subject: `Vendor Registration Submission - ${formData.companyName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
          <h2 style="color: #1C2833; border-bottom: 3px solid #E67E22; padding-bottom: 10px;">
            Vendor Registration Submission
          </h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <h3 style="color: #E67E22; margin-top: 0;">Company Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              ${formatField('Application No.', formData.applicationNo)}
              ${formatField('Company Name', formData.companyName)}
              ${formatField('C.R. #', formData.crNumber)}
              ${formatField('Address Line 1', formData.addressLine1)}
              ${formatField('Address Line 2', formData.addressLine2)}
            </table>
          </div>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-top: 15px;">
            <h3 style="color: #E67E22; margin-top: 0;">Contact Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              ${formatField('Telephone', formData.telephone)}
              ${formatField('Extension', formData.extn)}
              ${formatField('Mobile', formData.mobile)}
              ${formatField('Fax', formData.fax)}
              ${formatField('Email', formData.contactEmail)}
              ${formatField('Web Address', formData.webAddress)}
              ${formatField('Contact Person', formData.contactPerson)}
              ${formatField('Position', formData.position)}
            </table>
          </div>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-top: 15px;">
            <h3 style="color: #E67E22; margin-top: 0;">Registration &amp; Sponsorship</h3>
            <table style="width: 100%; border-collapse: collapse;">
              ${formatField('Sponsor', formData.sponsor)}
              ${formatField('No. of Employees', formData.employees)}
            </table>
          </div>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-top: 15px;">
            <h3 style="color: #E67E22; margin-top: 0;">Office Location</h3>
            <table style="width: 100%; border-collapse: collapse;">
              ${formatField('Location', formData.officeLocation)}
              ${formatField('Street Name', formData.streetName)}
              ${formatField('Building No.', formData.buildingNo)}
              ${formatField('Floor #', formData.floorNo)}
            </table>
          </div>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-top: 15px;">
            <h3 style="color: #E67E22; margin-top: 0;">Services &amp; Operations</h3>
            <table style="width: 100%; border-collapse: collapse;">
              ${formatField('Delivery', formData.delivery)}
              ${formatField('Maintenance', formData.maintenance)}
              ${formatField('Guarantee', formData.guarantee)}
              ${formatField('Payment Mode', formData.paymentMode)}
            </table>
          </div>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-top: 15px;">
            <h3 style="color: #E67E22; margin-top: 0;">Bank Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              ${formatField('Bank Name 1', formData.bankName)}
              ${formatField('Branch 1', formData.bankBranch)}
              ${formatField('A/C No. 1', formData.bankAccount)}
              ${formatField('Swift Code 1', formData.bankSwift)}
              ${formatField('Bank Name 2', formData.bankName2)}
              ${formatField('Branch 2', formData.bankBranch2)}
              ${formatField('A/C No. 2', formData.bankAccount2)}
              ${formatField('Swift Code 2', formData.bankSwift2)}
            </table>
          </div>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-top: 15px;">
            <h3 style="color: #E67E22; margin-top: 0;">Authorization</h3>
            <table style="width: 100%; border-collapse: collapse;">
              ${formatField('Authorized Signature', formData.authorizedSignature)}
              ${formatField('Company Seal', formData.companySeal)}
              ${formatField('Date', formData.authDate)}
            </table>
          </div>

          ${formData.officialCompanyName || formData.vendorCode || formData.category || formData.approvedBy || formData.officialDate ? `
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-top: 15px;">
            <h3 style="color: #E67E22; margin-top: 0;">For Petrozin Official Use Only</h3>
            <table style="width: 100%; border-collapse: collapse;">
              ${formatField('Company Name', formData.officialCompanyName)}
              ${formatField('Vendor Code', formData.vendorCode)}
              ${formatField('Category', formData.category)}
              ${formatField('Approved By', formData.approvedBy)}
              ${formatField('Date', formData.officialDate)}
            </table>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p><strong>Note:</strong> Please ensure all required documents (C.R. copies, licenses) are attached when responding to this vendor registration.</p>
            <p>This email was sent from the Petrozin website vendor registration form.</p>
            <p>You can reply directly to this email to respond to ${formData.contactPerson || formData.companyName}.</p>
          </div>
        </div>
      `,
      text: `
Vendor Registration Submission

Company Information:
Application No.: ${formData.applicationNo || 'N/A'}
Company Name: ${formData.companyName}
C.R. #: ${formData.crNumber || 'N/A'}
Address Line 1: ${formData.addressLine1 || 'N/A'}
Address Line 2: ${formData.addressLine2 || 'N/A'}

Contact Information:
Telephone: ${formData.telephone || 'N/A'} Extn: ${formData.extn || 'N/A'}
Mobile: ${formData.mobile || 'N/A'}
Fax: ${formData.fax || 'N/A'}
Email: ${formData.contactEmail}
Web Address: ${formData.webAddress || 'N/A'}
Contact Person: ${formData.contactPerson || 'N/A'}
Position: ${formData.position || 'N/A'}

Registration & Sponsorship:
Sponsor: ${formData.sponsor || 'N/A'}
No. of Employees: ${formData.employees || 'N/A'}

Office Location:
Location: ${formData.officeLocation || 'N/A'}
Street Name: ${formData.streetName || 'N/A'}
Building No.: ${formData.buildingNo || 'N/A'}
Floor #: ${formData.floorNo || 'N/A'}

Services & Operations:
Delivery: ${formData.delivery || 'N/A'}
Maintenance: ${formData.maintenance || 'N/A'}
Guarantee: ${formData.guarantee || 'N/A'}
Payment Mode: ${formData.paymentMode || 'N/A'}

Bank Information:
Bank Name 1: ${formData.bankName || 'N/A'}
Branch 1: ${formData.bankBranch || 'N/A'}
A/C No. 1: ${formData.bankAccount || 'N/A'}
Swift Code 1: ${formData.bankSwift || 'N/A'}
Bank Name 2: ${formData.bankName2 || 'N/A'}
Branch 2: ${formData.bankBranch2 || 'N/A'}
A/C No. 2: ${formData.bankAccount2 || 'N/A'}
Swift Code 2: ${formData.bankSwift2 || 'N/A'}

Authorization:
Authorized Signature: ${formData.authorizedSignature || 'N/A'}
Company Seal: ${formData.companySeal || 'N/A'}
Date: ${formData.authDate || 'N/A'}

For Petrozin Official Use Only:
Company Name: ${formData.officialCompanyName || 'N/A'}
Vendor Code: ${formData.vendorCode || 'N/A'}
Category: ${formData.category || 'N/A'}
Approved By: ${formData.approvedBy || 'N/A'}
Date: ${formData.officialDate || 'N/A'}

---
This email was sent from the Petrozin website vendor registration form.
      `,
    };


    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Vendor registration submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : undefined;
    
    // Log full error details for debugging
    if (process.env.NODE_ENV === 'development') {
      console.error('Full error details:', {
        message: errorMessage,
        stack: errorStack,
        emailUser: process.env.EMAIL_USER ? 'Set' : 'Missing',
        emailPassword: process.env.EMAIL_APP_PASSWORD ? 'Set' : 'Missing',
        emailRecipient: process.env.EMAIL_RECIPIENT || 'info@petrozin.com',
      });
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to submit vendor registration. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      },
      { status: 500 }
    );
  }
}

