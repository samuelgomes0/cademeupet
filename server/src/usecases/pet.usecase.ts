import { Pet, PetRepository } from "../interfaces/Pet.interface";
import { PetRepositoryPrisma } from "../repositories/pet.repository";

export class PetUseCase {
  private petRepository: PetRepository;

  constructor() {
    this.petRepository = new PetRepositoryPrisma();
  }

  async create({ name, type, breed, age }): Promise<Pet> {
    const pet = await this.petRepository.create({
      name,
      type,
      breed,
      age,
    });

    return pet;
  }

  async findByName(name: string): Promise<Pet[]> {
    const pet = await this.petRepository.findByName(name);

    if (!pet) {
      throw new Error("Pet not found");
    }

    return pet;
  }
}
