import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

// Setup: add GMAIL_USER and GMAIL_APP_PASSWORD to .env.local
// (create an app password at https://myaccount.google.com/apppasswords —
// requires 2-Step Verification enabled on the Google account).

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  // Lazy-initialize so the build doesn't fail without credentials
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error("GMAIL_USER or GMAIL_APP_PASSWORD is not set.");
    return NextResponse.json(
      { error: "Email service is not configured. Please try contacting me directly." },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid input.", details: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const { name, email, message } = parsed.data;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `Portfolio Contact <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr />
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });
  } catch (error) {
    console.error("Nodemailer error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
