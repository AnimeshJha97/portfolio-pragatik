import sgMail from "@sendgrid/mail";
// import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
sgMail.setApiKey(
  "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"
);
const FROM_EMAIL = "connectwithme.animesh.jha@gmail.com";
const TO_EMAIL = "connectwithme.animesh.jha@outlook.com";

export async function POST(req: Request, res: Response) {
  try {
    const data = await req.json();
    const { name, email, subject, content } = data;
    const contentMsg = `
    Name: ${name}rn
    Email: ${email}rn
    Subject: ${subject}rn
    Message: rn${content}
    `;
    const msg = {
      to: TO_EMAIL,
      from: FROM_EMAIL,
      subject: `${name} || ${subject}`,
      text: contentMsg,
      html: contentMsg.replace(/rn/g, "<br>"),
    };
    await sgMail.send(msg);
    return NextResponse.json({
      status: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({
      status: false,
      message: "Error sending Email",
      error: error,
    });
  }
}
