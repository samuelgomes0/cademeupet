import { prisma } from "../database/prisma-client";
import { Post, PostCreate, PostRepository } from "../interfaces/Post.interface";

export class PostRepositoryPrisma implements PostRepository {
  async create(data: PostCreate): Promise<Post> {
    const newPost = await prisma.post.create({
      data: {
        status: data.status,
        lastSeenAt: data.lastSeenAt,
        lastSeenOn: data.lastSeenOn,
        imageUrl: data.imageUrl,
        petId: data.petId,
        userId: data.userId,
      },
    });

    return newPost;
  }

  async findAll(): Promise<Post[]> {
    const posts = await prisma.post.findMany({
      include: {
        pet: true,
      },
    });

    return posts;
  }

  async findByPetName(name: string): Promise<Post[]> {
    const posts = await prisma.post.findMany({
      where: {
        pet: {
          name: name,
        },
      },
      include: {
        pet: true,
      },
    });

    return posts;
  }
}
