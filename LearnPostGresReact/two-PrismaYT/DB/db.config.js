import { Prisma, PrismaClient } from "@prisma/client";

const primsa = new PrismaClient({
  log: ["query"],
});

export default prisma;
