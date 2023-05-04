import { FC, useState } from "react";
import { useQuery } from "@apollo/client";

import { gql } from "../__generated__/gql";

import styles from "./CharacterList.module.css";

const GET_ALL_CHARACTERS = gql(/* GraphQL */ `
  query GetAllCharacters($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        image
      }
    }
  }
`);

export const CharacterList: FC = () => {
  const [page, setPage] = useState(1);

  const handleNextPage = () => {
    setPage((prev) => ++prev);
  };

  const handlePrevPage = () => {
    if (!(page - 1 < 1)) {
      setPage((prev) => --prev);
    }
  };

  const { data, loading } = useQuery(GET_ALL_CHARACTERS, {
    variables: { page: page },
  });

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <button type="button" onClick={handlePrevPage} disabled={page < 2}>
        &lt;&lt;&lt;
      </button>
      <button type="button" onClick={handleNextPage}>
        &gt;&gt;&gt;
      </button>

      <ul className={styles.list}>
        {data.characters.results.map((character) => (
          <li key={character.id} className={styles.character}>
            <div>
              <img src={character.image} />
              <p>{character.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
