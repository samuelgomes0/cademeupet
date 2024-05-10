import { prisma } from "../database/prisma-client";
import { User, UserCreate, UserRepository } from "../interfaces/User.interface";

export class UserRepositoryPrisma implements UserRepository {
  async create(data: UserCreate): Promise<User> {
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone,
      },
    });

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user || null;
  }
}
