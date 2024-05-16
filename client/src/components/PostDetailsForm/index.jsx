import { useForm } from "react-hook-form";
import { FormErrorMessage } from "../../components/FormErrorMessage";

export function PostDetailsForm({ onSubmit }) {
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
          className={`flex items-center ${!errors.status ? "xl:justify-end" : "xl:justify-between"} max-xl:flex-col max-xl:justify-center`}
        >
          {errors.status && (
            <FormErrorMessage content={errors.status.message} />
          )}
          <span className="text-sm font-medium text-gray-700">Status</span>
        </div>
        <select
          className="mt-1 w-full rounded-md border bg-white px-4 py-2 text-base text-gray-700 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          {...register("status", { required: "Status é obrigatório" })}
        >
          <option value="">Selecione o status</option>
          <option value="Desaparecido">Desaparecido</option>
          <option value="Encontrado">Encontrado</option>
          <option value="Adoção">Adoção</option>
          <option value="Lar temporário">Lar temporário</option>
        </select>
      </label>
      <label className="block">
        <div
          className={`flex items-center ${!errors.lastSeenAt ? "xl:justify-end" : "xl:justify-between"} max-xl:flex-col max-xl:justify-center`}
        >
          {errors.lastSeenAt && (
            <FormErrorMessage content={errors.lastSeenAt.message} />
          )}
          <span className="text-sm font-medium text-gray-700">
            Último local visto
          </span>
        </div>
        <input
          type="text"
          className="mt-1 w-full rounded-md border bg-white px-4 py-2 text-base text-gray-700 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          {...register("lastSeenAt", { required: "Localização é obrigatória" })}
        />
      </label>
      <label className="block">
        <div
          className={`flex items-center ${!errors.lastSeenOn ? "xl:justify-end" : "xl:justify-between"} max-xl:flex-col max-xl:justify-center`}
        >
          {errors.lastSeenOn && (
            <FormErrorMessage content={errors.lastSeenOn.message} />
          )}
          <span className="text-sm font-medium text-gray-700">
            Último dia visto
          </span>
        </div>
        <input
          type="date"
          className="mt-1 w-full rounded-md border bg-white px-4 py-2 text-base text-gray-700 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          {...register("lastSeenOn", { required: "Dia é obrigatório" })}
        />
      </label>
      <label className="block">
        <div
          className={`flex items-center ${!errors.picture ? "xl:justify-end" : "xl:justify-between"} max-xl:flex-col max-xl:justify-center`}
        >
          {errors.picture && (
            <FormErrorMessage content={errors.picture.message} />
          )}
          <span className="text-sm font-medium text-gray-700">Imagem</span>
        </div>
        <input
          type="file"
          accept="image/*"
          className="mt-1 w-full cursor-pointer rounded-md border bg-white px-4 py-2 text-base text-gray-700 shadow-sm file:mr-4 file:rounded-lg file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-primaryHover focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          {...register("picture", { required: "Imagem é obrigatória" })}
        />
      </label>
      <button
        type="submit"
        className="mt-4 w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primaryHover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Publicar
      </button>
    </form>
  );
}
