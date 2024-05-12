import { FastifyInstance } from "fastify";
import { PostUseCase } from "../usecases/post.usecase";

export async function postRoutes(fastify: FastifyInstance) {
  const postUseCase = new PostUseCase();

  fastify.post<{
    Body: {
      status: string;
      lastSeenAt?: string;
      lastSeenOn?: Date;
      imageUrl: string;
      petId: string;
      userId: string;
    };
  }>("/", async (request, reply) => {
    const { status, lastSeenAt, lastSeenOn, imageUrl, petId, userId } =
      request.body;

    try {
      const data = await postUseCase.create({
        status,
        lastSeenAt,
        lastSeenOn,
        imageUrl,
        petId,
        userId,
      });

      return reply.code(201).send(data);
    } catch (error) {
      reply.code(500).send({ error: error.message });
    }
  });

  fastify.get("/posts", async (request, reply) => {
    try {
      const data = await postUseCase.findAll();

      return reply.code(200).send(data);
    } catch (error) {
      reply.code(500).send({ error: error.message });
    }
  });

  fastify.get<{ Params: { name: string } }>("/", async (request, reply) => {
    const { name } = request.params;

    try {
      const data = await postUseCase.findByPetName(name);

      return reply.code(200).send(data);
    } catch (error) {
      reply.code(500).send({ error: error.message });
    }
  });
}
