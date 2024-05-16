import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../ButtonPrimary";

export function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <header className="flex items-center justify-between bg-header p-6 max-lg:flex-col max-lg:gap-6">
      <h1 className="font-patuaOne text-xl font-black uppercase">
        <a href="/" className="flex items-center gap-2 max-sm:text-center">
          Cadê meu <br />
          pet?
        </a>
      </h1>
      <form className="flex gap-4" onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Buscar por nome"
          className="rounded bg-background px-4 py-2.5 text-sm text-dark"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <ButtonPrimary
          type="submit"
          content="Buscar"
          className="max-md:hidden"
        />
      </form>
      <div className="flex gap-4">
        <ButtonPrimary
          content="Criar conta"
          onClick={() => navigate("/cadastrar")}
        />
        <ButtonPrimary content="Entrar" onClick={() => navigate("/login")} />
      </div>
    </header>
  );
}
