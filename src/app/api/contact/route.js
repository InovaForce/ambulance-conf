import nodemailer from 'nodemailer';

export default async (req, res) => {
  const { senderEmail, receiverEmail, subject, text } = req.body;

  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // Çevre değişkeni kullanılıyor
    port: process.env.SMTP_PORT, // Çevre değişkeni kullanılıyor
    secure: true,
    auth: {
      user: process.env.SMTP_USER, // Çevre değişkeni kullanılıyor
      pass: process.env.SMTP_PASSWORD // Çevre değişkeni kullanılıyor
    }
  });

  let mailOptions = {
    from: `"Form Sender" <${senderEmail}>`,
    to: receiverEmail,
    subject: subject,
    text: text,
    html: `<b>${text}</b>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(200).json({ success: true });
  });
};
