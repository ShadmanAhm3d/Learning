import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();

const port = process.env.PORT || 3000;

//route

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "server is running",
  });
});

app.listen(port, () => {
  console.log(`server runnuing on ${port} `);
});
