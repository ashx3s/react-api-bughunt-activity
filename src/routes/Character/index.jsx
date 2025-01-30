import { useState, useEffect } from "react";
import { useParams } from "react-router";
export default function Character() {
  const [character, setCharacter] = useState(null);
  const { characterId } = useParams();

  useEffect(() => {
    async function getCharacter() {
      const apiUrl = `https://api.disneyapi.dev/character/${characterId}`;
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`);
        }
        const data = await response.json();
        const characterData = Array.isArray(data.data)
          ? data.data[0]
          : data.data;
        setCharacter(characterData);
      } catch (err) {
        console.error("Error fetching characters", err);
        setCharacter(false);
      }
    }
    getCharacter();
  }, [characterId]);
  if (character === null) {
    return <p>Loading...</p>;
  }
  if (character === false) {
    return <p>Character Not Found</p>;
  }
  return (
    <>
      <header className="my-12">
        <h1 className="text-6xl font-bold">{character.name}</h1>
        <img src={character.imageUrl} alt={character.name} />
      </header>
    </>
  );
}
