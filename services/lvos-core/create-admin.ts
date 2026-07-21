import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import * as bcrypt from "bcrypt";
import { randomUUID } from "crypto";
import "dotenv/config";


const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL as string,
});


const prisma = new PrismaClient({
  adapter,
});


async function main() {

  const password = "Admin123456";

  const hash = await bcrypt.hash(password,10);


  const user = await prisma.user.upsert({

    where:{
      email:"admin@lvos.com"
    },

    update:{
      name:"LVOS Super Admin",
      password:hash,
      passwordHash:hash,
      roleId:"e011883d-8aa4-47c4-981b-c9eea00d03dc"
    },

    create:{
      id: randomUUID(),
      name:"LVOS Super Admin",
      email:"admin@lvos.com",
      password:hash,
      passwordHash:hash,
      roleId:"e011883d-8aa4-47c4-981b-c9eea00d03dc"
    }

  });


  console.log("");
  console.log("===============================");
  console.log("ADMIN CREADO");
  console.log("===============================");
  console.log("EMAIL: admin@lvos.com");
  console.log("PASSWORD: Admin123456");
  console.log(user);

}


main()

.catch(console.error)

.finally(async()=>{

 await prisma.$disconnect();

});
