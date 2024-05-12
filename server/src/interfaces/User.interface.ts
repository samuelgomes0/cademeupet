export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  phone?: string;
  posts?: Array<object>;
  comments?: Array<object>;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserCreate {
  email: string;
  password: string;
  name: string;
  phone?: string;
}

export interface UserRepository {
  create(user: UserCreate): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  login(email: string, password: string): Promise<User | null>;
}
