import { useForm } from "react-hook-form";
import { createUser } from "../../services";
import { ButtonPrimary } from "../ButtonPrimary";
import { ButtonSecondary } from "../ButtonSecondary";
import { RegisterInput } from "../RegisterInput";

export function RegisterModal({ isOpen, closeModal }) {
  if (!isOpen) return null;

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm();

  const handleCreateAccount = ({ email, password, name, phone }) => {
    createUser({ email, password, name, phone });
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="rounded-lg bg-white p-8 shadow-lg">
        <h2 className="text-xl font-bold text-dark">Criar conta</h2>
        <form
          onSubmit={handleSubmit(handleCreateAccount)}
          className="relative text-dark"
        >
          <RegisterInput
            labelInputId="name"
            labelContent="Nome"
            inputType="text"
            register={register}
            validationRules={{ required: "Nome é obrigatório" }}
            errorMessage={errors.name && errors.name.message}
          />

          <RegisterInput
            labelInputId="email"
            labelContent="E-mail"
            inputType="email"
            register={register}
            validationRules={{
              required: "E-mail é obrigatório",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Insira um e-mail válido",
              },
            }}
            placeholder={"email@contato.com"}
            errorMessage={errors.email && errors.email.message}
          />
          <RegisterInput
            labelInputId="password"
            labelContent="Senha"
            inputType="password"
            register={register}
            validationRules={{
              required: "Senha é obrigatória",
              minLength: {
                value: 8,
                message: "Senha deve ter pelo menos 8 caracteres",
              },
            }}
            errorMessage={errors.password && errors.password.message}
          />
          <RegisterInput
            labelInputId="confirmPassword"
            labelContent="Confirmar senha"
            inputType="password"
            register={register}
            validationRules={{
              required: "Confirmação de senha é obrigatória",
              validate: (value) =>
                value === getValues("password") || "As senhas não coincidem",
            }}
            errorMessage={
              errors.confirmPassword && errors.confirmPassword.message
            }
          />
          <RegisterInput
            labelInputId="phone"
            labelContent="Telefone"
            inputType="tel"
            register={register}
            validationRules={{
              pattern: {
                value: /^\d{10,11}$/,
                message: "Telefone deve ter 10 ou 11 dígitos",
              },
            }}
            placeholder={"(00) 00000-0000"}
            errorMessage={errors.phone && errors.phone.message}
          />
          <div className="mt-6 flex items-center justify-between gap-4">
            <ButtonPrimary
              content="Criar conta"
              type="submit"
              className="text-white"
            />
            <ButtonSecondary content="Fechar" onClick={closeModal} />
          </div>
        </form>
      </div>
    </div>
  );
}
