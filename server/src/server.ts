import fastify, { FastifyInstance } from "fastify";
import { petRoutes } from "./routes/pet.routes";
import { userRoutes } from "./routes/user.routes";

const server: FastifyInstance = fastify();

server.register(userRoutes, { prefix: "/users" });
server.register(petRoutes, { prefix: "/pets" });

export default server;
