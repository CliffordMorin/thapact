import { NextApiRequest, NextApiResponse } from "next";
import emailjs from "emailjs-com";

const SERVICE_ID = process.env.EMAIL_SERVICE_ID;
const TEMPLATE_ID = process.env.EMAIL_TEMPLATE_ID;
const USER_ID = process.env.EMAIL_USER_ID;

if (!SERVICE_ID || !TEMPLATE_ID || !USER_ID) {
  throw new Error("Missing environment variables for EmailJS");
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { firstName, lastName, email, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const templateParams = {
      firstName,
      lastName,
      email,
      message,
    };

    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      USER_ID
    );
    console.log("Email sent successfully:", result.text);
    res.status(200).json({ success: "Email sent successfully" });
  } catch (error) {
    console.error("Failed to send email:", error);
    res
      .status(500)
      .json({ error: "Failed to send email", details: error.message });
  }
}
