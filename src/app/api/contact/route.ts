import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
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

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT || 'info@petrozin.com',
      replyTo: email,
      subject: `Website Contact Inquiry - ${service || 'General'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1C2833; border-bottom: 2px solid #E67E22; padding-bottom: 10px;">
            New Website Contact Inquiry
          </h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            ${phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
            ${service ? `<p><strong>Service of Interest:</strong> ${service}</p>` : ''}
          </div>
          <div style="margin-top: 20px;">
            <h3 style="color: #1C2833;">Message:</h3>
            <p style="background-color: #fff; padding: 15px; border-left: 4px solid #E67E22; border-radius: 4px;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This email was sent from the Petrozin website contact form.</p>
            <p>You can reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
      text: `
New Website Contact Inquiry

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}
${phone ? `Phone: ${phone}` : ''}
${service ? `Service of Interest: ${service}` : ''}

Message:
${message}

---
This email was sent from the Petrozin website contact form.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
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
        error: 'Failed to send email. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      },
      { status: 500 }
    );
  }
}

