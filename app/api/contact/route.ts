// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    // Gmail SMTP setup
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // use STARTTLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to you
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_RECIPIENT_EMAIL || process.env.EMAIL_USER,
      subject: `New Contact Form Submission - ${subject || "General Inquiry"}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Subject:</strong> ${subject || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    // Auto-reply to client
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting SocialFly Networks",
      html: `
        <h2>Thank you for your inquiry!</h2>
        <p>Dear ${name},</p>
        <p>We have received your message and will get back to you within 24-48 hours.</p>
        <p>Meanwhile, feel free to explore our website.</p>
        <p>Best regards,<br>SocialFly Networks Team</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (err: any) {
    console.error("Error sending email:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
