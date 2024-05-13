import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { PublishPost } from "../pages/PublishPost";
import { Register } from "../pages/Register";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/entrar" element={<Login />} />
      <Route path="/cadastrar" element={<Register />} />
      <Route path="/publicar" element={<PublishPost />} />
    </Routes>
  );
}
