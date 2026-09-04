import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, phone, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 },
      );
    }

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "nicholasedwardsesq@gmail.com",
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: [
        `Name:    ${name}`,
        `Phone:   ${phone || "—"}`,
        `Email:   ${email}`,
        ``,
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("[contact/route] send error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact/route] send error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 },
    );
  }
}
