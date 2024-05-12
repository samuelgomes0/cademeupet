import cors from "@fastify/cors";
import fastify, { FastifyInstance } from "fastify";

import { petRoutes } from "./routes/pet.routes";
import { postRoutes } from "./routes/post.routes";
import { userRoutes } from "./routes/user.routes";

const server: FastifyInstance = fastify();

server.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
});

server.register(userRoutes, { prefix: "/users" });
server.register(petRoutes, { prefix: "/pets" });
server.register(postRoutes, { prefix: "/posts" });

export default server;
