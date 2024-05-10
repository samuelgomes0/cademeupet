import server from "./server";

server.listen(
  {
    port: 3000,
  },
  () => {
    console.log(`Server listening on http://localhost:3000`);
  }
);
