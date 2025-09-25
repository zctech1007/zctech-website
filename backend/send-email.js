import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "dev.zctech@gmail.com",
    subject: `Nova mensagem de contato de ${name}`,
    html: `
      <p><b>Nome:</b> ${name}</p>
      <p><b>E-mail:</b> ${email}</p>
      <p><b>Mensagem:</b></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Falha ao enviar e-mail." });
  }
});

app.listen(3001, () => {
  console.log("Backend rodando em http://localhost:3001");
});