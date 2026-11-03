import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const escapeHtml = (value = '') =>
  String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);

export async function POST(req) {
  try {
    const { name, email, phone, subject, msg } = await req.json();
    const emailSubject = subject ? String(subject).replace(/[\r\n]+/g, ' ') : 'Kerrie Mariah Contact';

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Your email where you want to receive messages
      replyTo: email,
      subject: `Contact Form: ${emailSubject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
        <p><strong>Subject:</strong> ${escapeHtml(emailSubject)}</p>
        <p><strong>Message:</strong><br>${escapeHtml(msg).replace(/\n/g, '<br>')}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
} 