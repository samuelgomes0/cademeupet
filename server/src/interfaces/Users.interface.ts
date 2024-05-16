export interface Users {
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

export interface UsersCreate {
  email: string;
  password: string;
  name: string;
  phone?: string;
}

export interface UsersRepository {
  create(user: UsersCreate): Promise<Users>;
  findByEmail(email: string): Promise<Users | null>;
  login(email: string, password: string): Promise<Users | null>;
}
