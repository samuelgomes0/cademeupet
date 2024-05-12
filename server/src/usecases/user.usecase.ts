import { User, UserCreate, UserRepository } from "../interfaces/User.interface";
import { UserRepositoryPrisma } from "../repositories/user.repository";
import { encryptPassword } from "../utils";

export class UserUseCase {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepositoryPrisma();
  }

  async create({ name, email, password, phone }: UserCreate): Promise<User> {
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

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }
}
