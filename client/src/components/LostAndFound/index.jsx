import { useEffect, useState } from "react";
import { findAll } from "../../services";
import { ButtonPrimary } from "../ButtonPrimary";
import { PetCard } from "../PetCard";
import { Spinner } from "../Spinner";

/**
 * Component for displaying lost and found pets.
 * It fetches posts about lost and found pets and displays them.
 * Users can also post new information about lost or found pets.
 * @return {JSX.Element} The LostAndFound component.
 */
export function LostAndFound() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    findAll().then((data) => {
      setPosts(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <section className="my-4 flex flex-col items-center justify-center gap-8 p-4 text-dark">
      <div className="mb-2 flex flex-col items-center justify-center gap-1 text-center">
        <h2 className="text-2xl font-bold">
          Perdeu seu pet ou encontrou um animal perdido?
        </h2>
        <p>
          Ajude a reunir famílias! Publique os detalhes aqui e aumente as
          chances de um feliz reencontro.
        </p>
        <ButtonPrimary content="Publicar" className="mt-4 text-white" />
      </div>
      <div className="flex flex-col items-center">
        <h3 className="mb-4 text-lg font-bold">Últimos animais perdidos</h3>
        <ul className="flex flex-wrap justify-center gap-8">
          {isLoading ? (
            <Spinner />
          ) : posts.length > 0 ? (
            posts.map(({ id, imageUrl, lastSeenAt, status, pet }) => (
              <li key={id}>
                <PetCard
                  name={pet.name}
                  breed={pet.breed}
                  status={status}
                  lastSeenAt={lastSeenAt}
                  imageUrl={imageUrl}
                />
              </li>
            ))
          ) : (
            <p>Nenhum animal perdido encontrado.</p>
          )}
        </ul>
      </div>
    </section>
  );
}
