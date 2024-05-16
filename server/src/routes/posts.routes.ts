import { FastifyInstance } from "fastify";
import { PostsUseCase } from "../usecases/posts.usecase";

export async function postsRoutes(fastify: FastifyInstance) {
  const postsUseCase = new PostsUseCase();

  fastify.post<{
    Body: {
      name: string;
      type: string;
      breed: string;
      age?: string;
      status: string;
      lastSeenAt?: string;
      lastSeenOn?: Date;
      picture: string;
      userId: string;
    };
  }>("/", async (request, reply) => {
    const {
      name,
      type,
      breed,
      age,
      status,
      lastSeenAt,
      lastSeenOn,
      picture,
      userId,
    } = request.body;
    request.body;

    try {
      const data = await postsUseCase.create({
        name,
        type,
        breed,
        age,
        status,
        lastSeenAt,
        lastSeenOn,
        picture,
        userId,
      });

      return reply.code(201).send(data);
    } catch (error) {
      reply.code(500).send({ error: error.message });
    }
  });

  fastify.get("/", async (request, reply) => {
    try {
      const data = await postsUseCase.findAll();

      return reply.code(200).send(data);
    } catch (error) {
      reply.code(500).send({ error: error.message });
    }
  });

  fastify.get<{ Params: { name: string } }>(
    "/:name",
    async (request, reply) => {
      const { name } = request.params;

      try {
        const data = await postsUseCase.findByPetName(name);

        return reply.code(200).send(data);
      } catch (error) {
        reply.code(500).send({ error: error.message });
      }
    }
  );
}
