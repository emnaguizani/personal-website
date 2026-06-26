import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

// TODO: Add your Resend API key to .env.local as RESEND_API_KEY=re_xxxxxx
// Sign up at https://resend.com — free tier supports 100 emails/day.

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  // Lazy-initialize so the build doesn't fail without an API key
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set.");
    return NextResponse.json(
      { error: "Email service is not configured. Please try contacting me directly." },
      { status: 503 }
    );
  }
  const resend = new Resend(process.env.RESEND_API_KEY);

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

  // TODO: Replace "delivered@resend.dev" with a verified sender domain once
  //       you've added your domain in the Resend dashboard.
  const { error } = await resend.emails.send({
    from: "Portfolio Contact <delivered@resend.dev>",
    to: ["guizani.emna14@gmail.com"],
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

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
