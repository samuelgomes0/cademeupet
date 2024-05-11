import { prisma } from "../database/prisma-client";
import { Pet, PetCreate, PetRepository } from "../interfaces/Pet.interface";

export class PetRepositoryPrisma implements PetRepository {
  async create(data: PetCreate): Promise<Pet> {
    const pet = await prisma.pet.create({
      data: {
        name: data.name,
        type: data.type,
        breed: data.breed,
        age: data.age,
      },
    });

    return pet;
  }

  async findById(id: string): Promise<Pet | null> {
    const petFound = await prisma.pet.findUnique({
      where: {
        id,
      },
    });

    return petFound;
  }

  async findByName(name: string): Promise<Pet[]> {
    const petsFound = await prisma.pet.findMany({
      where: {
        name: {
          contains: name,
        },
      },
    });

    return petsFound;
  }
}
