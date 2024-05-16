export interface Posts {
  id: string;
  name: string;
  type: string;
  breed: string;
  age?: string;
  status: string;
  lastSeenAt: string;
  lastSeenOn: Date;
  picture: string;
  userId: string;
  comments?: Array<object>;
  createdAt: Date;
  updatedAt: Date;
}

export interface PostsCreate {
  name: string;
  type: string;
  breed: string;
  age?: string;
  status: string;
  lastSeenAt: string;
  lastSeenOn: Date;
  picture: string;
  userId: string;
}

export interface PostsRepository {
  create(data: PostsCreate): Promise<Posts>;
  findAll(): Promise<Posts[]>;
  findByPetName(name: string): Promise<Posts[]>;
}
