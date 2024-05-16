import { prisma } from "../database/prisma-client";
import {
  Users,
  UsersCreate,
  UsersRepository,
} from "../interfaces/Users.interface";

export class UsersRepositoryPrisma implements UsersRepository {
  async create(data: UsersCreate): Promise<Users> {
    console.log("repository", data);
    const user = await prisma.users.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone,
      },
    });

    return user;
  }

  async findByEmail(email: string): Promise<Users | null> {
    const userFound = await prisma.users.findFirst({
      where: {
        email,
      },
    });

    return userFound || null;
  }

  async login(email: string): Promise<Users | null> {
    const userFound = await prisma.users.findFirst({
      where: {
        email,
      },
    });

    return userFound || null;
  }
}
