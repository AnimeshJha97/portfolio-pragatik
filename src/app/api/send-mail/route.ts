import { NextRequest, NextResponse } from "next/server";

var Brevo = require("@getbrevo/brevo");

const FROM_EMAIL = `${process.env.BREVO_SENDER}`;
const TO_EMAIL = `${process.env.BREVO_RECIEVER}`;
const NAME = `${process.env.BREVO_NAME}`;

function isValidEmail(email: string) {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
}
export async function POST(req: Request, res: Response) {
  try {
    var apiInstance = new Brevo.TransactionalEmailsApi();
    let portfolioKey = apiInstance.authentications["apiKey"];
    portfolioKey.apiKey = `${process.env.BREVO_KEY}`;

    const requestObj = await req.json();
    const { name, email, subject, content } = requestObj;
    if (!name || !email || !subject || !content) {
      return NextResponse.json({
        status: false,
        message: "Please provide all necessary data.",
      });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({
        status: false,
        message: "Invalid Email ID",
      });
    }
    const contentMsg = `
    Name: ${name}rn
    Email: ${email}rn
    Subject: ${subject}rn
    Message: rn${content}
    `;

    var sendSmtpEmail = new Brevo.SendSmtpEmail();
    sendSmtpEmail.subject = `Portfolio Connect || ${subject}`;
    sendSmtpEmail.htmlContent = contentMsg.replace(/rn/g, "<br>");
    sendSmtpEmail.sender = {
      email: FROM_EMAIL,
      name: NAME,
    };
    sendSmtpEmail.to = [{ email: TO_EMAIL, name: NAME }];

    const apiResponse = await apiInstance.sendTransacEmail(sendSmtpEmail);
    return NextResponse.json({
      status: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: false,
      message: "Error sending Email",
      error: error,
    });
  }
}
