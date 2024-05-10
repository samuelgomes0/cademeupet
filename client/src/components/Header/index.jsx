import { ButtonPrimary } from "../ButtonPrimary";

export function Header() {
  return (
    <header className="bg-header flex items-center justify-between p-6">
      <h1 className="text-xl font-bold uppercase">Cadê meu pet?</h1>
      <form className="flex gap-4">
        <input
          type="search"
          placeholder="Buscar por nome"
          className="bg-background text-dark rounded px-4 py-2 text-sm"
        />
        <ButtonPrimary type="submit" content="Buscar" />
      </form>
      <ButtonPrimary content="Cadastrar" />
    </header>
  );
}
