import express from "express";
import cors from "cors";
import { sendEmail } from "./mail.js";
import { sendMessage } from "./telegram.js";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/letter", (req, res) => {
  const name = req.body.name;
  const text = req.body.text;

  sendEmail();

  res.send({ message: "отправлено" });
});

app.post("/telegram", (req, res) => {
  const name = req.body.name;
  const text = req.body.text;

  sendMessage(text);

  res.send({ message: "отправлено" });
});

app.listen(3003, () => {
  console.log("Server is running on port 3003");
});
