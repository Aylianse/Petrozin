import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.companyName || !body.contactEmail) {
      return NextResponse.json(
        { error: 'Company name and email are required' },
        { status: 400 }
      );
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
      replyTo: body.contactEmail,
      subject: `Vendor Registration Submission - ${body.companyName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
          <h2 style="color: #1C2833; border-bottom: 3px solid #E67E22; padding-bottom: 10px;">
            Vendor Registration Submission
          </h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <h3 style="color: #E67E22; margin-top: 0;">Company Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              ${formatField('Application No.', body.applicationNo)}
              ${formatField('Company Name', body.companyName)}
              ${formatField('C.R. #', body.crNumber)}
              ${formatField('Address Line 1', body.addressLine1)}
              ${formatField('Address Line 2', body.addressLine2)}
            </table>
          </div>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-top: 15px;">
            <h3 style="color: #E67E22; margin-top: 0;">Contact Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              ${formatField('Telephone', body.telephone)}
              ${formatField('Extension', body.extn)}
              ${formatField('Mobile', body.mobile)}
              ${formatField('Fax', body.fax)}
              ${formatField('Email', body.contactEmail)}
              ${formatField('Web Address', body.webAddress)}
              ${formatField('Contact Person', body.contactPerson)}
              ${formatField('Position', body.position)}
            </table>
          </div>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-top: 15px;">
            <h3 style="color: #E67E22; margin-top: 0;">Registration & Sponsorship</h3>
            <table style="width: 100%; border-collapse: collapse;">
              ${formatField('Sponsor', body.sponsor)}
              ${formatField('No. of Employees', body.employees)}
            </table>
          </div>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-top: 15px;">
            <h3 style="color: #E67E22; margin-top: 0;">Office Location</h3>
            <table style="width: 100%; border-collapse: collapse;">
              ${formatField('Location', body.officeLocation)}
              ${formatField('Street Name', body.streetName)}
              ${formatField('Building No.', body.buildingNo)}
              ${formatField('Floor #', body.floorNo)}
            </table>
          </div>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-top: 15px;">
            <h3 style="color: #E67E22; margin-top: 0;">Services & Operations</h3>
            <table style="width: 100%; border-collapse: collapse;">
              ${formatField('Delivery', body.delivery)}
              ${formatField('Maintenance', body.maintenance)}
              ${formatField('Guarantee', body.guarantee)}
              ${formatField('Payment Mode', body.paymentMode)}
            </table>
          </div>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-top: 15px;">
            <h3 style="color: #E67E22; margin-top: 0;">Bank Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              ${formatField('Bank Name 1', body.bankName)}
              ${formatField('Branch 1', body.bankBranch)}
              ${formatField('A/C No. 1', body.bankAccount)}
              ${formatField('Swift Code 1', body.bankSwift)}
              ${formatField('Bank Name 2', body.bankName2)}
              ${formatField('Branch 2', body.bankBranch2)}
              ${formatField('A/C No. 2', body.bankAccount2)}
              ${formatField('Swift Code 2', body.bankSwift2)}
            </table>
          </div>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-top: 15px;">
            <h3 style="color: #E67E22; margin-top: 0;">Authorization</h3>
            <table style="width: 100%; border-collapse: collapse;">
              ${formatField('Authorized Signature', body.authorizedSignature)}
              ${formatField('Company Seal', body.companySeal)}
              ${formatField('Date', body.authDate)}
            </table>
          </div>

          ${body.officialCompanyName || body.vendorCode || body.category || body.approvedBy || body.officialDate ? `
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-top: 15px;">
            <h3 style="color: #E67E22; margin-top: 0;">For Petrozin Official Use Only</h3>
            <table style="width: 100%; border-collapse: collapse;">
              ${formatField('Company Name', body.officialCompanyName)}
              ${formatField('Vendor Code', body.vendorCode)}
              ${formatField('Category', body.category)}
              ${formatField('Approved By', body.approvedBy)}
              ${formatField('Date', body.officialDate)}
            </table>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p><strong>Note:</strong> Please ensure all required documents (C.R. copies, licenses) are attached when responding to this vendor registration.</p>
            <p>This email was sent from the Petrozin website vendor registration form.</p>
            <p>You can reply directly to this email to respond to ${body.contactPerson || body.companyName}.</p>
          </div>
        </div>
      `,
      text: `
Vendor Registration Submission

Company Information:
Application No.: ${body.applicationNo || 'N/A'}
Company Name: ${body.companyName}
C.R. #: ${body.crNumber || 'N/A'}
Address Line 1: ${body.addressLine1 || 'N/A'}
Address Line 2: ${body.addressLine2 || 'N/A'}

Contact Information:
Telephone: ${body.telephone || 'N/A'} Extn: ${body.extn || 'N/A'}
Mobile: ${body.mobile || 'N/A'}
Fax: ${body.fax || 'N/A'}
Email: ${body.contactEmail}
Web Address: ${body.webAddress || 'N/A'}
Contact Person: ${body.contactPerson || 'N/A'}
Position: ${body.position || 'N/A'}

Registration & Sponsorship:
Sponsor: ${body.sponsor || 'N/A'}
No. of Employees: ${body.employees || 'N/A'}

Office Location:
Location: ${body.officeLocation || 'N/A'}
Street Name: ${body.streetName || 'N/A'}
Building No.: ${body.buildingNo || 'N/A'}
Floor #: ${body.floorNo || 'N/A'}

Services & Operations:
Delivery: ${body.delivery || 'N/A'}
Maintenance: ${body.maintenance || 'N/A'}
Guarantee: ${body.guarantee || 'N/A'}
Payment Mode: ${body.paymentMode || 'N/A'}

Bank Information:
Bank Name 1: ${body.bankName || 'N/A'}
Branch 1: ${body.bankBranch || 'N/A'}
A/C No. 1: ${body.bankAccount || 'N/A'}
Swift Code 1: ${body.bankSwift || 'N/A'}
Bank Name 2: ${body.bankName2 || 'N/A'}
Branch 2: ${body.bankBranch2 || 'N/A'}
A/C No. 2: ${body.bankAccount2 || 'N/A'}
Swift Code 2: ${body.bankSwift2 || 'N/A'}

Authorization:
Authorized Signature: ${body.authorizedSignature || 'N/A'}
Company Seal: ${body.companySeal || 'N/A'}
Date: ${body.authDate || 'N/A'}

For Petrozin Official Use Only:
Company Name: ${body.officialCompanyName || 'N/A'}
Vendor Code: ${body.vendorCode || 'N/A'}
Category: ${body.category || 'N/A'}
Approved By: ${body.approvedBy || 'N/A'}
Date: ${body.officialDate || 'N/A'}

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

