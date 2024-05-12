import { useForm } from "react-hook-form";
import { ButtonPrimary } from "../ButtonPrimary";
import { ButtonSecondary } from "../ButtonSecondary";
import { FormErrorMessage } from "../FormErrorMessage";
import { Input } from "../Input";

export function RegisterModal({ isOpen, closeModal }) {
  if (!isOpen) return null;

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm();

  const handleCreateAccount = (data) => {
    console.log("Criar conta", data);
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
          <Input
            labelInputId="name"
            labelContent="Nome"
            inputType="text"
            isRequired={true}
            register={register}
            validationRules={{ required: "Nome é obrigatório" }}
          />
          {errors.name && <FormErrorMessage content={errors.name.message} />}
          <Input
            labelInputId="email"
            labelContent="E-mail"
            inputType="email"
            isRequired={true}
            register={register}
            validationRules={{
              required: "E-mail é obrigatório",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Insira um e-mail válido",
              },
            }}
            placeholder={"email@contato.com"}
          />
          {errors.email && <FormErrorMessage content={errors.email.message} />}
          <Input
            labelInputId="password"
            labelContent="Senha"
            inputType="password"
            isRequired={true}
            register={register}
            validationRules={{
              required: "Senha é obrigatória",
              minLength: {
                value: 8,
                message: "Senha deve ter pelo menos 8 caracteres",
              },
            }}
          />
          {errors.password && (
            <FormErrorMessage content={errors.password.message} />
          )}
          <Input
            labelInputId="confirmPassword"
            labelContent="Confirmar senha"
            inputType="password"
            isRequired={true}
            register={register}
            validationRules={{
              required: "Confirmação de senha é obrigatória",
              validate: (value) =>
                value === getValues("password") || "As senhas não coincidem",
            }}
          />
          {errors.confirmPassword && (
            <FormErrorMessage content={errors.confirmPassword.message} />
          )}
          <Input
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
          />
          {errors.phone && <FormErrorMessage content={errors.phone.message} />}
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
