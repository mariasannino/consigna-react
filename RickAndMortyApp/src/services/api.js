export async function fetchCharacters() {
  const response = await fetch(
    "https://rickandmortyapi.com/api/character?page=2" //esta en page 2 posar en page 1 quan canviem
  );
  const data = await response.json();
  return data.results;
}
