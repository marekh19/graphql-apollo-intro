import { FC, useState } from "react";
import { useQuery } from "@apollo/client";

import { gql } from "../__generated__/gql";
import { Character } from "../__generated__/graphql";

import styles from "./CharacterList.module.css";

import Navigation from "./Navigation";

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

  const { data, loading } = useQuery(GET_ALL_CHARACTERS, {
    variables: { page: page },
  });

  return (
    <div className={styles.wrapper}>
      <Navigation page={page} setPage={setPage} />
      {loading && <p>Loading...</p>}
      {!loading && (
        <ul className={styles.list}>
          {data.characters.results.map((character: Character) => (
            <li key={character.id} className={styles.character}>
              <div>
                <img src={character.image ?? ""} alt="Character image" />
                <p>{character.name}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
