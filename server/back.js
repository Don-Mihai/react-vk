const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/test", (req, res) => {
  const name = req.body.name;

  res.send({ upperName: name.toUpperCase() });
});

app.listen(3003, () => {
  console.log("Server is running on port 3003");
});
