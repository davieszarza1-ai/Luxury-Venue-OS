const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {

  const role = await prisma.role.findUnique({
    where:{
      name:'USER'
    }
  });

  if(!role){
    throw new Error('USER role not found');
  }

  const password = await bcrypt.hash(
    'User123456',
    10
  );

  const existing = await prisma.user.findUnique({
    where:{
      email:'test.user@lvos.com'
    }
  });

  if(existing){
    console.log('User already exists');
    return;
  }

  const user = await prisma.user.create({
    data:{
      email:'test.user@lvos.com',
      password,
      name:'Test User',
      roleId:role.id
    }
  });

  console.log('Created:', user.email);

}

main()
.catch(console.error)
.finally(async()=>{
  await prisma.$disconnect();
});