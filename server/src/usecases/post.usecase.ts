import { Post, PostRepository } from "../interfaces/Post.interface";
import { PostRepositoryPrisma } from "../repositories/post.repository";

export class PostUseCase {
  private postRepository: PostRepository;

  constructor() {
    this.postRepository = new PostRepositoryPrisma();
  }

  async create({ status, lastSeenAt, lastSeenOn, imageUrl, petId, userId }) {
    const post = await this.postRepository.create({
      status,
      lastSeenAt,
      lastSeenOn,
      imageUrl,
      petId,
      userId,
    });

    return post;
  }

  async findAll(): Promise<Post[]> {
    const posts = await this.postRepository.findAll();

    if (!posts.length) {
      throw new Error("Posts not found");
    }

    return posts;
  }

  async findByPetName(name: string): Promise<Post[] | null> {
    const posts = await this.postRepository.findByPetName(name);

    if (!posts.length) {
      throw new Error("Posts not found");
    }

    return posts;
  }
}
