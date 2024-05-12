import { FastifyInstance } from "fastify";
import { UserCreate } from "../interfaces/User.interface";
import { UserUseCase } from "../usecases/user.usecase";

export async function userRoutes(fastify: FastifyInstance) {
  const userUseCase = new UserUseCase();

  fastify.post<{ Body: UserCreate }>("/", async (request, reply) => {
    const { name, email, password, phone } = request.body;

    console.log("routes", request.body);

    console.log(request.body);

    try {
      const data = await userUseCase.create({
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
        const data = await userUseCase.findByEmail(email);

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
        const data = await userUseCase.login(email, password);

        return reply.code(201).send(data);
      } catch (error) {
        reply.code(404).send({ error: error.message });
      }
    }
  );
}
