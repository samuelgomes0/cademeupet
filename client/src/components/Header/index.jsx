import { useState } from "react";
import { ButtonPrimary } from "../ButtonPrimary";
import { LoginModal } from "../LoginModal";
import { RegisterModal } from "../RegisterModal";

export function Header() {
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);

  const changeRegisterModalState = (state) => {
    setOpenRegisterModal(state);
  };

  const changeLoginModalState = (state) => {
    setOpenLoginModal(state);
  };

  return (
    <header className="flex items-center justify-between bg-header p-6 max-lg:flex-col max-lg:gap-6">
      <h1 className="font-patuaOne text-xl font-black uppercase">
        Cadê meu <br></br>pet?
      </h1>
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
      <div className="flex gap-4">
        <ButtonPrimary
          content="Criar conta"
          onClick={() => setOpenRegisterModal(true)}
        />
        <ButtonPrimary
          content="Entrar"
          onClick={() => setOpenLoginModal(true)}
        />
      </div>
      <RegisterModal
        isOpen={openRegisterModal}
        closeModal={() => changeRegisterModalState(false)}
      />
      <LoginModal
        isOpen={openLoginModal}
        closeModal={() => changeLoginModalState(false)}
      />
    </header>
  );
}
