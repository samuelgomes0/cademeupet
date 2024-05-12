import { useEffect, useState } from "react";
import { findAll } from "../../services";
import { PetCard } from "../PetCard";

export function LostAndFound() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    findAll().then((data) => {
      setPosts(data);
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
        {posts.map(({ id, imageUrl, lastSeenAt, status, pet }) => (
          <li key={id}>
            <PetCard
              name={pet.name}
              breed={pet.breed}
              status={status}
              lastSeenAt={lastSeenAt}
              imageUrl={imageUrl}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
