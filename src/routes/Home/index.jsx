import { useState, useEffect } from "react";
import pageHeader from "../../components/PageHeader";

const headerContent = {
  title: "Home Page",
  description:
    "Use your home page to test and experiment or to display alternative strategies to rendering content. Consider making a reusable PageHeader component using props for the title and description.",
};
export default function Home() {
  const [character, setCharacters] = useState([]);

  useEffect(() => {
    async function getCharacters() {
      const apiUrl = "https://api.disneyapi.dev/character";
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`);
        }
        // This is not an optimized example because we are still fetching 50 elements and then on the client side cutting it down to six
        // TODO: Is there a way to limit the amount of data requested from the API?
        const data = await response.json();
        const characters = data.data.slice(0, 2);
        setCharacters(character);
      } catch (err) {
        console.error("Error fetching characters", err);
      }
    }
    getCharacters();
  }, []);
  return (
    <>
      <pageHeader {...headerContent} />
      <div>
        <h2>First 6 Characters</h2>
        {character.map((character) => {
          return (
            <article key={character._id}>
              <h3 className="text-2xl font-bold">{character.name}</h3>
              <img src={character.imageUrl} alt={character.name} />
              <div className="my-4 max-w-fit rounded-md bg-gray-800 p-4">
                {/* {/*                  */}
                <h4 className="text-xl font-bold">Movies</h4>
                <ul>
                  {character.films.map((movie, index) => {
                    return <li>{movie}</li>;
                  })}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
