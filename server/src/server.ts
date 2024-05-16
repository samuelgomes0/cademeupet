import cors from "@fastify/cors";
import fastify, { FastifyInstance } from "fastify";

import { postsRoutes } from "./routes/posts.routes";
import { usersRoutes } from "./routes/users.routes";

const server: FastifyInstance = fastify({ logger: true });

server.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
});

server.register(usersRoutes, { prefix: "/users" });
server.register(postsRoutes, { prefix: "/posts" });

export default server;
