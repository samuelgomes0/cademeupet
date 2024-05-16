import { FastifyInstance } from "fastify";
import { UsersCreate } from "../interfaces/Users.interface";
import { UsersUseCase } from "../usecases/users.usecase";

export async function usersRoutes(fastify: FastifyInstance) {
  const usersUseCase = new UsersUseCase();

  fastify.post<{ Body: UsersCreate }>("/", async (request, reply) => {
    const { name, email, password, phone } = request.body;

    console.log("routes", request.body);

    console.log(request.body);

    try {
      const data = await usersUseCase.create({
        name,
        email,
        password,
        phone,
      });

      return reply.code(201).send(data);
    } catch (error) {
      reply.code(500).send({ error: error.message });
    }
  });

  fastify.get<{ Params: { email: string } }>(
    "/:email",
    async (request, reply) => {
      const { email } = request.params;

      try {
        const data = await usersUseCase.findByEmail(email);

        return reply.code(201).send(data);
      } catch (error) {
        reply.code(404).send({ error: error.message });
      }
    }
  );

  fastify.post<{ Body: { email: string; password: string } }>(
    "/login",
    async (request, reply) => {
      const { email, password } = request.body;

      try {
        const data = await usersUseCase.login(email, password);

        return reply.code(201).send(data);
      } catch (error) {
        reply.code(404).send({ error: error.message });
      }
    }
  );
}
