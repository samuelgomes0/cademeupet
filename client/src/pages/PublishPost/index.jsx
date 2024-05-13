import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import dogReceivingAffection from "../../assets/dogReceivingAffection.jpg";
import { FormErrorMessage } from "../../components/FormErrorMessage";

export function PublishPost() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setProgress((prevProgress) => prevProgress + 50);
  };

  return (
    <main className="relative m-auto flex h-screen w-full items-center justify-between text-dark max-xl:justify-center">
      <FiArrowLeft
        className="absolute left-4 top-4 size-8 cursor-pointer text-white transition-colors hover:text-primary max-xl:text-primary"
        onClick={() => navigate("/")}
      />
      <section className="h-full w-1/2 max-xl:hidden">
        <img
          src={dogReceivingAffection}
          alt="Cachorro recebendo carinho"
          className="h-full w-full object-cover shadow-lg"
        />
      </section>
      <section className="m-auto space-y-6 text-end max-xl:items-center max-xl:gap-4 max-xl:p-4 max-xl:text-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-dark">Fazer publicação</h1>
          <p className="text-sm">
            Primeiro, precisamos de algumas informações sobre o animal
          </p>
        </div>
        <form
          className="flex flex-col gap-4 max-xl:text-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="block">
            <div
              className={`flex items-center ${!errors.name ? "xl:justify-end" : "xl:justify-between"} max-xl:flex-col max-xl:justify-center`}
            >
              {errors.name && (
                <FormErrorMessage content={errors.name.message} />
              )}
              <span className="text-sm font-medium text-gray-700">Nome</span>
            </div>
            <input
              type="text"
              className="mt-1 w-full rounded-md border bg-white px-4 py-2 text-base text-gray-700 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              {...register("name", { required: "Nome é obrigatório" })}
            />
          </label>
          <label className="block">
            <div
              className={`flex items-center ${!errors.species ? "xl:justify-end" : "xl:justify-between"} max-xl:flex-col max-xl:justify-center`}
            >
              {errors.species && (
                <FormErrorMessage content={errors.species.message} />
              )}
              <span className="text-sm font-medium text-gray-700">Espécie</span>
            </div>
            <select
              className="mt-1 w-full rounded-md border bg-white px-4 py-2 text-base text-gray-700 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              {...register("species", { required: "Espécie é obrigatória" })}
            >
              <option value="">Selecione a espécie</option>
              <option value="cachorro">Cachorro</option>
              <option value="gato">Gato</option>
            </select>
          </label>
          <label className="block">
            <div
              className={`flex items-center ${!errors.breed ? "xl:justify-end" : "xl:justify-between"} max-xl:flex-col max-xl:justify-center`}
            >
              {errors.breed && (
                <FormErrorMessage content={errors.breed.message} />
              )}
              <span className="text-sm font-medium text-gray-700">Raça</span>
            </div>
            <input
              type="text"
              className="mt-1 w-full rounded-md border bg-white px-4 py-2 text-base text-gray-700 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              {...register("breed", { required: "Raça é obrigatória" })}
            />
          </label>
          <label className="block">
            <div
              className={`flex items-center ${!errors.age ? "xl:justify-end" : "xl:justify-between"} max-xl:flex-col max-xl:justify-center`}
            >
              {errors.age && <FormErrorMessage content={errors.age.message} />}
              <span className="text-sm font-medium text-gray-700">Idade</span>
            </div>
            <input
              type="number"
              className="mt-1 w-full rounded-md border bg-white px-4 py-2 text-base text-gray-700 shadow-sm [appearance:textfield] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              {...register("age", {
                min: { value: 0, message: "Idade não pode ser negativa" },
              })}
            />
          </label>
          <button
            type="submit"
            className="mt-4 w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primaryHover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Próximo
          </button>
        </form>
        <div className="h-2.5 w-full rounded-full bg-gray-200">
          <div
            className="h-2.5 rounded-full bg-primary"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <form
          className="flex flex-col gap-4 max-xl:text-center"
          onSubmit={handleSubmit(onSubmit)}
        ></form>
      </section>
    </main>
  );
}
