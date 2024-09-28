const { PrismaClient } = require('@prisma/client');
const users = require('./seed.json');

const prisma = new PrismaClient();

async function main() {
  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }
  console.log('Seed completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
