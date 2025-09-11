// lib/nodemailer.ts
import nodemailer from "nodemailer";

type Transporter = nodemailer.Transporter;

let transporter: Transporter | null = null;

export function getTransporter(): Transporter {
  if (transporter) return transporter;

  // Use SMTP credentials stored in ENV — see README below for recommended providers
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("SMTP_HOST, SMTP_USER and SMTP_PASS must be set in environment variables");
  }

  transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for other ports
    auth: {
      user,
      pass,
    },
  });

  return transporter;
}

export function buildContactHtml({ name, email, company, phone, message }: Record<string, string>) {
  return `
  <div style="font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color:#111;">
    <h2 style="color:#FF6A00;">New contact request</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
    ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
    <hr/>
    <h3 style="color:#333;">Message</h3>
    <p style="white-space:pre-wrap;">${escapeHtml(message)}</p>
    <hr/>
    <small style="color:#666;">Received on ${new Date().toLocaleString()}</small>
  </div>
  `;
}

function escapeHtml(unsafe = "") {
  return (unsafe + "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
