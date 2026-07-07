const { Resend } = require("resend");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  try {
    const { name, email, message } = JSON.parse(event.body || "{}");
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: process.env.FORM_FROM_EMAIL,
      to: process.env.FORM_TO_EMAIL,
      replyTo: email,
      subject: `Website enquiry from ${name || "Visitor"}`,
      text: message || ""
    });

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch {
    return { statusCode: 500, body: JSON.stringify({ error: "Email failed" }) };
  }
};
