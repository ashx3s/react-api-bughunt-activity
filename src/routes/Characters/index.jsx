import { useState, useEffect } from "react";
import PageHeader from "../../components/PageHeader";

export default function Characters() {
  // state for characters
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function getCharacters() {
      const apiUrl = "https://api.disneyapi.dev/character";
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`);
        }
        const characters = await response.json();
        setCharacters(characters.data);
      } catch (err) {
        console.error("Error fetching characters", err);
      }
    }
    getCharacters();
  }, []);
  return (
    <main>
      <PageHeader
        title="Characters"
        description="these are some disney characters"
      />
      <div>
        <ul>
          {characters.map((character) => {
            return (
              <li key={character._id} className="my-6">
                <h3 className="mb-2 text-2xl">{character.name}</h3>
                <img src={character.imageUrl} alt={character.name} />
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
