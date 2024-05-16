import { useForm } from "react-hook-form";
import { FormErrorMessage } from "../../components/FormErrorMessage";

export function AnimalInfoForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      className="flex flex-col gap-4 max-xl:text-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="block">
        <div
          className={`flex items-center ${!errors.name ? "xl:justify-end" : "xl:justify-between"} max-xl:flex-col max-xl:justify-center`}
        >
          {errors.name && <FormErrorMessage content={errors.name.message} />}
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
          className={`flex items-center ${!errors.type ? "xl:justify-end" : "xl:justify-between"} max-xl:flex-col max-xl:justify-center`}
        >
          {errors.type && <FormErrorMessage content={errors.type.message} />}
          <span className="text-sm font-medium text-gray-700">Espécie</span>
        </div>
        <select
          className="mt-1 w-full rounded-md border bg-white px-4 py-2 text-base text-gray-700 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          {...register("type", { required: "Espécie é obrigatória" })}
        >
          <option value="">Selecione a espécie</option>
          <option value="Cachorro">Cachorro</option>
          <option value="Gato">Gato</option>
        </select>
      </label>
      <label className="block">
        <div
          className={`flex items-center ${!errors.breed ? "xl:justify-end" : "xl:justify-between"} max-xl:flex-col max-xl:justify-center`}
        >
          {errors.breed && <FormErrorMessage content={errors.breed.message} />}
          <span className="text-sm font-medium text-gray-700">Raça</span>
        </div>
        <input
          type="text"
          placeholder="Em branco para sem raça definida"
          className="mt-1 w-full rounded-md border bg-white px-4 py-2 text-base text-gray-700 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          {...register("breed")}
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
  );
}
