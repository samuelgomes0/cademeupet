import { useForm } from "react-hook-form";
import { loginUser } from "../../services";
import { ButtonPrimary } from "../ButtonPrimary";
import { ButtonSecondary } from "../ButtonSecondary";
import { LoginInput } from "../LoginInput";

export function LoginModal({ isOpen, closeModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    loginUser(data);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="rounded-lg bg-white p-8 shadow-lg">
        <h2 className="text-xl font-bold text-dark">Criar conta</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="relative text-dark">
          <LoginInput
            labelInputId="email"
            labelContent="E-mail"
            inputType="email"
            register={register("email", {
              required: "E-mail é obrigatório",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "E-mail inválido",
              },
            })}
            errorMessage={errors.email && errors.email.message}
          />
          <LoginInput
            labelInputId="password"
            labelContent="Senha"
            inputType="password"
            placeholder="email@contato.com"
            register={register("password", {
              required: "Senha obrigatória",
              minLength: {
                value: 6,
                message: "Senha deve ter pelo menos 6 caracteres",
              },
            })}
            errorMessage={errors.password && errors.password.message}
          />

          <div className="mt-6 flex items-center justify-between gap-4">
            <ButtonPrimary
              content="Entrar"
              type="submit"
              className="text-white"
            />
            <ButtonSecondary
              content="Fechar"
              onClick={() => {
                closeModal();
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
