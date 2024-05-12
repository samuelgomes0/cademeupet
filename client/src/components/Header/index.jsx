import { useState } from "react";
import { ButtonPrimary } from "../ButtonPrimary";
import { RegisterModal } from "../RegisterModal";

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const changeModalState = (state) => {
    setIsModalOpen(state);
  };

  return (
    <header className="flex items-center justify-between bg-header p-6 max-lg:flex-col max-lg:gap-6">
      <h1 className="text-xl font-bold uppercase">Cadê meu pet?</h1>
      <form className="flex gap-4">
        <input
          type="search"
          placeholder="Buscar por nome"
          className="rounded bg-background px-4 py-2.5 text-sm text-dark"
        />
        <ButtonPrimary
          type="submit"
          content="Buscar"
          className="max-md:hidden"
        />
      </form>
      <ButtonPrimary
        content="Criar conta"
        onClick={() => changeModalState(true)}
      />
      <RegisterModal
        isOpen={isModalOpen}
        closeModal={() => changeModalState(false)}
      />
    </header>
  );
}
