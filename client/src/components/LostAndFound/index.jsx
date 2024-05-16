import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
export function LostAndFound({ searchTerm }) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    findAll().then((data) => {
      setPosts(data);
      setFilteredPosts(data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = posts.filter((post) =>
        post.pet.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts);
    }
  }, [searchTerm, posts]);

  return (
    <section className="my-4 flex flex-col items-center justify-center gap-8 p-4 text-dark">
      <div className="mb-2 flex flex-col items-center justify-center gap-1 text-center">
        <h2 className="text-2xl font-bold">
          Perdeu seu pet ou encontrou um animal perdido?
        </h2>
        <p>
          Ajude a reunir famílias! Publique os detalhes aqui e aumente as
          chances de um feliz reencontro
        </p>
        <ButtonPrimary
          content="Fazer publicação"
          className="mt-4 text-white"
          onClick={() => navigate("/publicar")}
        />
      </div>
      <div className="flex flex-col items-center">
        <h3 className="mb-6 text-xl font-semibold">Últimos animais perdidos</h3>
        <ul className="flex flex-wrap justify-center gap-8">
          {isLoading ? (
            <Spinner />
          ) : filteredPosts && filteredPosts.length > 0 ? (
            filteredPosts.map(
              ({
                id,
                name,
                breed,
                status,
                lastSeenAt,
                lastSeenOn,
                picture,
              }) => (
                <li key={id}>
                  <PetCard
                    name={name}
                    breed={breed}
                    status={status}
                    lastSeenAt={lastSeenAt}
                    lastSeenOn={lastSeenOn}
                    picture={picture}
                  />
                </li>
              ),
            )
          ) : (
            <p>Nenhum animal encontrado.</p>
          )}
        </ul>
      </div>
    </section>
  );
}
