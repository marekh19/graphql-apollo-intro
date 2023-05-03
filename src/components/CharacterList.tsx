import { FC } from "react";
import { useQuery, gql } from "@apollo/client";

import styles from "./CharacterList.module.css";

const get_characters = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export const CharacterList: FC = () => {
  const { data, loading, error } = useQuery(get_characters);
  console.log(data);

  return (
    <>
      {loading && <p>Loading</p>}
      <ul className={styles.list}>
        {!loading &&
          data &&
          data.characters.results.map((character) => (
            <li className={styles.character} key={character.id}>
              {character.name}
            </li>
          ))}
      </ul>
    </>
  );
};
