import PageHeader from "../../components/PageHeader";

const apiUrl = "https://api.disneyapi.dev/character";

async function getCharacters(url = apiUrl) {
  const response = await fetch(url);
  const characters = await response.json();
  console.log(characters);
}

getCharacters();
export default function Characters() {
  return (
    <main>
      <PageHeader
        title="Characters"
        description="these are some disney characters"
      />
      <div>{/* Render characters here */}</div>
    </main>
  );
}
