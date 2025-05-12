//to fetch the first page
export async function fetchCharacters() {
  const response = await fetch(
    "https://rickandmortyapi.com/api/character?page=1" //esta en page 2 posar en page 1 quan canviem
  );
  const data = await response.json();
  return data.results;
}

//to fetch based on page num
export async function fetchPages(pageNum) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${pageNum}`
  );
  const data = await response.json();
  return data.results;
}

//To find in the searchBar by name
export async function fetchSearchFilter(name, pageNum) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${pageNum}&name=${name}`
  );
  const data = await response.json();
  return data.results;
}
