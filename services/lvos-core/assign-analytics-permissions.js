const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {

  const role = await prisma.role.findUnique({
    where: {
      name: "SUPER_ADMIN"
    }
  });

  if (!role) {
    throw new Error("SUPER_ADMIN role not found");
  }

  const names = [
    "analytics.read",
    "sales.read",
    "reports.read"
  ];

  for (const name of names) {

    let permission = await prisma.permission.findUnique({
      where: {
        name
      }
    });

    if (!permission) {
      permission = await prisma.permission.create({
        data: {
          name
        }
      });

      console.log("Created permission:", name);
    }

    const exists = await prisma.rolePermission.findFirst({
      where: {
        roleId: role.id,
        permissionId: permission.id
      }
    });

    if (!exists) {

      await prisma.rolePermission.create({
        data: {
          roleId: role.id,
          permissionId: permission.id
        }
      });

      console.log("Assigned:", name);

    } else {

      console.log("Already exists:", name);

    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("DONE");
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });