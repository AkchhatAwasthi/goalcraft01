import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { firstName, lastName, email, phone, message } = await req.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail', // or your preferred service
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL, // Send to admin
            subject: `New Contact Form Submission from ${firstName} ${lastName}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #f9f9f9;">
          <h2 style="color: #0B1E3F; text-align: center; border-bottom: 2px solid #0B1E3F; padding-bottom: 10px;">New Contact Message</h2>
          
          <div style="margin-top: 20px;">
            <p style="font-size: 16px; color: #333;"><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p style="font-size: 16px; color: #333;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0B1E3F; text-decoration: none;">${email}</a></p>
            <p style="font-size: 16px; color: #333;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            
            <div style="background-color: #ffffff; padding: 15px; border-radius: 5px; border: 1px solid #ddd; margin-top: 15px;">
              <p style="font-size: 16px; color: #555; margin: 0;"><strong>Message:</strong></p>
              <p style="font-size: 15px; color: #333; line-height: 1.6; margin-top: 5px;">${message}</p>
            </div>
          </div>

          <div style="margin-top: 30px; text-align: center; font-size: 12px; color: #888;">
            <p>This email was sent automatically from the GoalCraft website contact form.</p>
          </div>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
    }
}
