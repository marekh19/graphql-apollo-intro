import { FC } from "react";
import { useQuery, gql } from "@apollo/client";

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
    <ul>
      {data &&
        data.characters.results.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
    </ul>
  );
};
