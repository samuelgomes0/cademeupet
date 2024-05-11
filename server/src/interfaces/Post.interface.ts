export interface Post {
  id: string;
  status: string;
  lastSeenAt?: string;
  lastSeeOn?: Date;
  imageUrl: string;
  petId: string;
  userId: string;
  comments?: Array<object>;
  createdAt: Date;
  updatedAt: Date;
}

export interface PostCreate {
  status: string;
  imageUrl: string;
  petId: string;
  userId: string;
}

export interface PostRepository {
  create(data: PostCreate): Promise<Post>;
}
