import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiArrowLeft, FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { FormErrorMessage } from "../../components/FormErrorMessage";
import { createUser } from "../../services";

export function Register() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleCreateAccount = (data) => {
    createUser(data);
    navigate("/");
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="relative flex h-screen items-center justify-center bg-background text-dark">
      <FiArrowLeft
        className="absolute left-4 top-4 size-8 cursor-pointer text-primary transition-colors hover:text-primaryHover"
        onClick={() => navigate("/")}
      />
      <div className="w-full max-w-sm space-y-6 rounded bg-white p-8 shadow-md max-sm:mx-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-center text-2xl font-bold">Seja bem-vindo!</h1>
          <p className="text-center text-sm max-sm:hidden">
            Cadastre-se agora e comece a fazer a diferença
          </p>
        </div>
        <form
          className="space-y-8 max-sm:space-y-4"
          onSubmit={handleSubmit(handleCreateAccount)}
        >
          <div>
            <div className="flex items-center justify-between gap-4">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                E-mail
              </label>
              {errors.email && (
                <FormErrorMessage content={errors.email.message} />
              )}
            </div>
            <input
              type="email"
              id="email"
              name="email"
              {...register("email", {
                required: "E-mail é obrigatório",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "E-mail inválido",
                },
              })}
              className="mt-1 w-full rounded-md border bg-white px-4 py-2 text-base text-gray-700 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <div className="flex items-center justify-between gap-4">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                Nome
              </label>
              {errors.name && (
                <FormErrorMessage content={errors.name.message} />
              )}
            </div>
            <input
              type="text"
              id="name"
              name="name"
              {...register("name", { required: "Nome é obrigatório" })}
              className="mt-1 w-full rounded-md border bg-white px-4 py-2 text-base text-gray-700 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="relative">
            <div className="flex items-center justify-between gap-4">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Senha
              </label>
              {errors.password && (
                <FormErrorMessage content={errors.password.message} />
              )}
            </div>
            <div className="relative">
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                name="password"
                {...register("password", {
                  required: "Senha é obrigatória",
                  minLength: {
                    value: 8,
                    message: "Senha deve ter pelo menos 8 caracteres",
                  },
                })}
                className="mt-1 w-full rounded-md border bg-white px-4 py-2 text-base text-gray-700 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-4 block size-5 focus:outline-none"
              >
                {!isPasswordVisible ? (
                  <FiEyeOff className="size-4 text-gray-700 hover:text-primary" />
                ) : (
                  <FiEye className="size-4 text-gray-700 hover:text-primary" />
                )}
              </button>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between gap-4">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700"
              >
                Telefone
              </label>
              {errors.phone && (
                <FormErrorMessage content={errors.phone.message} />
              )}
            </div>
            <input
              type="phone"
              id="phone"
              name="phone"
              {...register("phone", { required: "Telefone é obrigatório" })}
              className="mt-1 w-full rounded-md border bg-white px-4 py-2 text-base text-gray-700 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primaryHover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
