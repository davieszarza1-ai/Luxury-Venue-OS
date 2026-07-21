import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";

const prisma = new PrismaClient();

async function main() {
  console.log("Seed ejecutado");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
