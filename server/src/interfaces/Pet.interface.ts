export interface Pet {
  id: string;
  name: string;
  type: string;
  breed: string;
  age?: number;
  posts?: Array<object>;
  createdAt: Date;
  updatedAt: Date;
}

export interface PetCreate {
  name: string;
  type: string;
  breed: string;
  age?: number;
}

export interface PetRepository {
  create(data: PetCreate): Promise<Pet>;
  findById(id: string): Promise<Pet | null>;
  findByName(name: string): Promise<Pet[]>;
}
