const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main(){

  const role = await prisma.role.findUnique({
    where:{
      name:'WAITER'
    }
  });

  if(!role){
    throw new Error('WAITER role not found');
  }


  const exists = await prisma.user.findUnique({
    where:{
      email:'waiter.test@lvos.com'
    }
  });


  if(exists){
    console.log('User already exists');
    return;
  }


  const password = await bcrypt.hash(
    'Waiter123456',
    10
  );


  const user = await prisma.user.create({
    data:{
      email:'waiter.test@lvos.com',
      password,
      name:'Test Waiter',
      roleId:role.id
    }
  });


  console.log('Created:', user.email);

}


main()
.finally(async()=>{
  await prisma.$disconnect();
});