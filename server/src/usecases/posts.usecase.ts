import { Posts, PostsRepository } from "../interfaces/Posts.interface";
import { PostsRepositoryPrisma } from "../repositories/posts.repository";

export class PostsUseCase {
  private postsRepository: PostsRepository;

  constructor() {
    this.postsRepository = new PostsRepositoryPrisma();
  }

  async create({
    name,
    type,
    breed,
    age,
    status,
    lastSeenAt,
    lastSeenOn,
    picture,
    userId,
  }) {
    const post = await this.postsRepository.create({
      name,
      type,
      breed,
      age,
      status,
      lastSeenAt,
      lastSeenOn,
      picture,
      userId,
    });

    return post;
  }

  async findAll(): Promise<Posts[]> {
    const posts = await this.postsRepository.findAll();

    if (!posts.length) {
      throw new Error("Posts not found");
    }

    return posts;
  }

  async findByPetName(name: string): Promise<Posts[]> {
    const posts = await this.postsRepository.findByPetName(name);

    if (!posts.length) {
      throw new Error("Posts not found");
    }

    return posts;
  }
}
