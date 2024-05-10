import { User, UserCreate, UserRepository } from "../interfaces/User.interface";
import { UserRepositoryPrisma } from "../repositories/user.repository";

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

    const user = await this.userRepository.create({
      name,
      email,
      password,
      phone,
    });

    return user;
  }
}
