import { prisma } from "../database/prisma-client";
import {
  Posts,
  PostsCreate,
  PostsRepository,
} from "../interfaces/Posts.interface";

export class PostsRepositoryPrisma implements PostsRepository {
  async create(data: PostsCreate): Promise<Posts> {
    const newPost = await prisma.posts.create({
      data: {
        name: data.name,
        type: data.type,
        breed: data.breed,
        age: data.age,
        status: data.status,
        lastSeenAt: data.lastSeenAt,
        lastSeenOn: data.lastSeenOn,
        picture: data.picture,
        user: {
          connect: {
            id: data.userId,
          },
        },
      },
    });

    return newPost;
  }

  async findAll(): Promise<Posts[]> {
    const posts = await prisma.posts.findMany();

    return posts;
  }

  async findByPetName(name: string): Promise<Posts[]> {
    const posts = await prisma.posts.findMany({
      where: {
        name: {
          contains: name,
        },
      },
      orderBy: {
        name: "asc",
      },
    });

    return posts;
  }
}
