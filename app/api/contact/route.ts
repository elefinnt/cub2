import nodemailer from "nodemailer";
import { Request, Response } from "express";

export default async function ContactAPI(req: Request, res: Response) {
  const { name, email, phone, subject } = req.body;

  const user = process.env.user;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: user,
      pass: process.env.pass,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: user,
      to: "finn@cubdigital.co.nz",
      replyTo: email,
      subject: `Contact form from ${name}`,
      html: `
      <p>name: ${name}</p>
      <p>email: ${email}</p>
      <p>subject: ${subject}</p>
      <p>phone: ${phone}</p>
      `,
    });

    console.log("Message ID: ", mail.messageId);
    return res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Could not send your email. Your message was not sent",
    });
  }
}
