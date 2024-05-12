import { ButtonPrimary } from "../ButtonPrimary";
import { ButtonSecondary } from "../ButtonSecondary";
import { Input } from "../Input";

export function Modal({ isOpen, closeModal }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="rounded-lg bg-white p-8 shadow-lg">
        <h2 className="text-xl font-bold text-dark">Criar conta</h2>
        <form className="text-dark">
          <Input
            labelInputId="name"
            labelContent="Nome"
            inputType="text"
            isRequired={true}
          />
          <Input
            labelInputId="email"
            labelContent="E-mail"
            inputType="email"
            isRequired={true}
          />
          <Input
            labelInputId="password"
            labelContent="Senha"
            inputType="password"
            isRequired={true}
          />
          <Input
            labelInputId="confirmPassword"
            labelContent="Confirmar senha"
            inputType="text"
            isRequired={true}
          />
          <Input labelInputId="phone" labelContent="Telefone" inputType="tel" />
          <div className="mt-6 flex items-center justify-between gap-4">
            <ButtonPrimary content="Criar conta" className={"text-white"} />
            <ButtonSecondary content="Fechar" onClick={closeModal} />
          </div>
        </form>
      </div>
    </div>
  );
}
