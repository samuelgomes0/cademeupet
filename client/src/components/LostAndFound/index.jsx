import { useEffect, useState } from "react";
import { findAll } from "../../services";
import { PetCard } from "../PetCard";
import { Spinner } from "../Spinner";

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
      <div className="mb-2 flex flex-col gap-1 text-center">
        <h2 className="text-2xl font-bold">
          Perdeu seu pet ou encontrou um animal perdido?
        </h2>
        <p>
          Ajude a reunir famílias! Publique os detalhes aqui e aumente as
          chances de um feliz reencontro.
        </p>
      </div>
      <ul className="flex flex-wrap justify-center gap-8">
        {isLoading ? (
          <Spinner />
        ) : posts ? (
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
          <p>Nenhum post encontrado</p>
        )}
      </ul>
    </section>
  );
}
