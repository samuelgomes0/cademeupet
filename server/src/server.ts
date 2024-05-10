import fastify, { FastifyInstance } from "fastify";
import { userRoutes } from "./routes/user.routes";

const server: FastifyInstance = fastify();

server.register(userRoutes, { prefix: "/users" });

export default server;
