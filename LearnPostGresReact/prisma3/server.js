import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const prisma = new PrismaClient({
  log: ["query"], // Logs queries for debugging
});

const app = express();
app.use(express.json()); // Middleware for parsing JSON bodies

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Server is running",
  });
});

app.post("/adduser", async (req, res) => {
  const { id, email, name, posts } = req.body;

  try {
    const newUserinDB = await prisma.user.create({
      data: {
        id, // Auto-increment will handle this if not provided
        email,
        name,
      },
    });

    console.log("New User Created:", newUserinDB);

    const result = await prisma.$queryRaw`SELECT * FROM "User"`;
    console.log(result)



    res.status(201).json({
      msg: "User created successfully",
      user: newUserinDB,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(400).json({
      error: "Could not create user",
      details: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

