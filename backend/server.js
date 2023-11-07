const express = require("express");
const cors = require("cors");
const { json, urlencoded } = require("body-parser");

const app = express();
const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 4000;

app.use(json());
app.use(urlencoded({ extended: false }));

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/", (request, response) => {
  response.send("<h1>Hello from server.js</h1>");
});

app.post("/api", (request, response) => {
  console.log("Got a request");
  console.log(request.body.data);

  const data = request.body.data;

  response.json({
    status: "success",
    data: data,
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "login",
      user: "eaconstrucoes2019@gmail.com",
      pass: "deydwihhhywwqdex",
    },
  });

  const mailOptions = {
    from: data.email,
    to: "eaconstrucoes2019@gmail.com",
    subject: `Email from ${data.email}, phone ${data.phone}`,
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
