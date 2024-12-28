import prisma from "../DB/db.config.js";

export const createUser = (req, res) => {
  const { name, email, password } = req.body;
};
