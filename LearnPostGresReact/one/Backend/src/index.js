import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = process.env.PORT || 3001;

//middlewares

app.use(express.json());
app.use(cors());

//Routes

//ErrorHandling middleware

//server runnnig

app.listen(port, () => {
  console.log(`Server is Running on ${port}`);
});
