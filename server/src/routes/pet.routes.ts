import { FastifyInstance } from "fastify";
import { PetCreate } from "../interfaces/Pet.interface";
import { PetUseCase } from "../usecases/pet.usecase";

export async function petRoutes(fastify: FastifyInstance) {
  const petUseCase = new PetUseCase();

  fastify.post<{ Body: PetCreate }>("/", async (request, reply) => {
    const { name, type, breed, age } = request.body;

    try {
      const data = await petUseCase.create({
        name,
        type,
        breed,
        age,
      });

      return reply.code(201).send(data);
    } catch (error) {
      reply.code(500).send({ error: error.message });
    }
  });

  fastify.get<{ Params: { name: string } }>(
    "/:name",
    async (request, reply) => {
      const { name } = request.params;

      try {
        const data = await petUseCase.findByName(name);

        return reply.code(201).send(data);
      } catch (error) {
        reply.code(500).send({ error: error.message });
      }
    }
  );
}
