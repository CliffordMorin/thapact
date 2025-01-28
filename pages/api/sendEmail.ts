import { NextApiRequest, NextApiResponse } from "next";

const SERVICE_ID = process.env.EMAIL_SERVICE_ID;
const TEMPLATE_ID = process.env.EMAIL_TEMPLATE_ID;
const USER_ID = process.env.EMAIL_USER_ID;

if (!SERVICE_ID || !TEMPLATE_ID || !USER_ID) {
  throw new Error("Missing environment variables for EmailJS");
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  res.status(200).json({
    serviceId: SERVICE_ID,
    templateId: TEMPLATE_ID,
    userId: USER_ID,
  });
}
