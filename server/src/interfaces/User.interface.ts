export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  phone?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserCreate {
  name: string;
  email: string;
  password: string;
  phone?: string;
}

export interface UserRepository {
  create(user: UserCreate): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
}
