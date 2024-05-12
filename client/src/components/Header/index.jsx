import { useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../ButtonPrimary";

export function Header() {
  const navigate = useNavigate();

  const handleSearchForPet = (event) => {
    event.preventDefault();

    const searchValue = event.target.value;

    console.log(searchValue);
  };

  return (
    <header className="flex items-center justify-between bg-header p-6 max-lg:flex-col max-lg:gap-6">
      <h1 className="font-patuaOne text-xl font-black uppercase">
        <a href="/" className="flex items-center gap-2 max-sm:text-center">
          Cadê meu <br />
          pet?
        </a>
      </h1>
      <form className="flex gap-4">
        <input
          type="search"
          placeholder="Buscar por nome"
          onChange={handleSearchForPet}
          className="rounded bg-background px-4 py-2.5 text-sm text-dark"
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
          onClick={() => navigate("/cadastro")}
        />
        <ButtonPrimary content="Entrar" onClick={() => navigate("/login")} />
      </div>
    </header>
  );
}
