import { prisma } from "../database/prisma-client";
import { Post, PostCreate, PostRepository } from "../interfaces/Post.interface";

export class PostRepositoryPrisma implements PostRepository {
  async create(data: PostCreate): Promise<Post> {
    const newPost = await prisma.post.create({
      data: {
        status: data.status,
        imageUrl: data.imageUrl,
        petId: data.petId,
        userId: data.userId,
      },
    });

    return newPost;
  }
}
