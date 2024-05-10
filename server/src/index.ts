import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface User {
  name: string;
  email: string;
  password: string;
  phone: string;
}

interface Pet {
  name: string;
  specie: string;
  breed?: string;
  age: number;
  status: string;
  lastSeenLocation: string;
  owner: User;
}

async function main() {}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
