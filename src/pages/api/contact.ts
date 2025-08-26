import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "সব ফিল্ড পূরণ করুন" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // 587 port → TLS
      auth: {
        user: process.env.EMAIL_USER, // GoDaddy ইমেইল sender
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Tapplix Website Form" <${process.env.EMAIL_USER}>`, // GoDaddy ইমেইল sender
      to: "design@tapplix.tech", // সব মেইল এখানে যাবে
      subject: "New Form Submission from Tapplix.tech",
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    res.status(200).json({ message: "✅ ইমেইল সফলভাবে পাঠানো হয়েছে" });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ message: "❌ ইমেইল পাঠানো যায়নি" });
  }
}
