const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 4000;

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));

app.post("/api", (request, response) => {
  const data = request.body.data;

  response.json({
    status: "success",
    data: data,
  });

  console.log(data);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "login",
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: data.email,
    to: "eaconstrucoes2019@gmail.com",
    subject: `Email enviado por ${data.email}. Telefone ${data.phone}.`,
    text: data.message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      response.send(error);
    } else {
      console.log(`Email send: ${info.response}`);
      response.send("success");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
