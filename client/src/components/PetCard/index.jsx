import { ButtonSecondary } from "../ButtonSecondary";

// eslint-disable-next-line react/prop-types
export function PetCard({ name, breed, status, lastSeenAt, imageUrl }) {
  return (
    <article className="w-full max-w-[250px] rounded-lg bg-background p-4 shadow-sm transition-shadow hover:shadow-md">
      <h2 className="text-lg font-semibold">{name}</h2>
      <div className="mt-4 h-[200px] w-full overflow-hidden rounded-lg shadow-sm">
        <img
          src={imageUrl}
          alt={name}
          title={name}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="text-textDark mt-3 text-sm">
        <p>
          <strong>Raça:</strong> {breed}
        </p>
        <p>
          <strong>Status:</strong> {status}
        </p>
        <p className="whitespace-normal">
          <strong>Visto pela última vez:</strong>{" "}
          {lastSeenAt ? lastSeenAt : "Não informado"}
        </p>
      </div>
      <ButtonSecondary type="button" content="Ver detalhes" />
    </article>
  );
}
