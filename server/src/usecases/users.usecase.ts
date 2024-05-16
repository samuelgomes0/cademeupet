import {
  Users,
  UsersCreate,
  UsersRepository,
} from "../interfaces/Users.interface";
import { UsersRepositoryPrisma } from "../repositories/users.repository";
import { encryptPassword } from "../utils";

export class UsersUseCase {
  private userRepository: UsersRepository;

  constructor() {
    this.userRepository = new UsersRepositoryPrisma();
  }

  async create({ name, email, password, phone }: UsersCreate): Promise<Users> {
    const verifyIfUserExists = await this.userRepository.findByEmail(email);

    if (verifyIfUserExists) {
      throw new Error("User already exists");
    }

    password = encryptPassword(password);

    const user = await this.userRepository.create({
      name,
      email,
      password,
      phone,
    });

    return user;
  }

  async findByEmail(email: string): Promise<Users | null> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }

  async login(email: string, password: string): Promise<Users | null> {
    const user = await this.userRepository.login(email, password);

    if (!user) {
      throw new Error("User not found");
    }

    if (user.password !== encryptPassword(password)) {
      throw new Error("Invalid password");
    }

    return user;
  }
}
