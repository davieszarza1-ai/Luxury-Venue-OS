const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const hash = "$2b$10$x5rcXpD2OTDOAI4.aFHW9e/GZ61.41IwGw1gU.mIB/TSCw9EAS2gy";

  const user = await prisma.user.update({
    where: {
      email: "admin@lvos.com"
    },
    data: {
      password: hash,
      passwordHash: hash
    }
  });

  console.log(user);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());