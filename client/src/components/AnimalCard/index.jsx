import { ButtonSecondary } from "../ButtonSecondary";

// eslint-disable-next-line react/prop-types
export function AnimalCard({ name, breed, status, lastSeenLocation, image }) {
  return (
    <article className="bg-background w-full max-w-[250px] rounded-lg p-4 shadow-sm transition-shadow hover:shadow-md">
      <h2 className="text-lg font-semibold">{name}</h2>
      <div className="mt-4 h-[200px] w-full overflow-hidden rounded-lg shadow-sm transition-shadow hover:shadow-md">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
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
          <strong>Visto pela última vez:</strong> {lastSeenLocation}
        </p>
      </div>
      <ButtonSecondary type="button" content="Ver detalhes" />
    </article>
  );
}
