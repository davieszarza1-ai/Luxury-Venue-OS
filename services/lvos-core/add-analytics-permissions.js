const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {

  const permissions = [
    'analytics.read',
    'sales.read',
    'reports.read'
  ];

  for (const name of permissions) {

    const permission = await prisma.permission.upsert({
      where: {
        name
      },
      update: {},
      create: {
        name
      }
    });

    console.log(permission);

  }

}

main()
.then(() => prisma.$disconnect())
.catch(async e => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});