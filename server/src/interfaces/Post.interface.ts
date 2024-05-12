export interface Post {
  id: string;
  status: string;
  lastSeenAt?: string;
  lastSeenOn?: Date;
  imageUrl: string;
  petId: string;
  userId: string;
  comments?: Array<object>;
  createdAt: Date;
  updatedAt: Date;
}

export interface PostCreate {
  status: string;
  lastSeenAt?: string;
  lastSeenOn?: Date;
  imageUrl: string;
  petId: string;
  userId: string;
}

export interface PostRepository {
  create(data: PostCreate): Promise<Post>;
  findAll(): Promise<Post[]>;
  findByPetName(name: string): Promise<Post[]>;
}
