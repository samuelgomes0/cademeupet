import server from "./server";

server.listen(
  {
    port: 3000,
    host: "0.0.0.0",
  },
  () => {
    console.log(`Server is running!`);
  }
);
