//to fetch the first page
export async function fetchCharacters() {
  const response = await fetch(
    "https://rickandmortyapi.com/api/character?page=1" //esta en page 2 posar en page 1 quan canviem
  );
  const data = await response.json();
  return data;
}

//to fetch based on page num
export async function fetchPages(pageNum) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${pageNum}`
  );
  const data = await response.json();
  return data;
}

//To find in the searchBar by name
export async function fetchSearchFilter(name, pageNum) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${pageNum}&name=${name}`
    );

    if (!response.ok) return { results: [], info: { pages: 1 } };
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Search failed:", error);
    return { results: [], info: { pages: 1 } };
  }
}

//TO FILTER STATUS
export async function fetchStatusFilter(status, pageNum) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${pageNum}&status=${status}`
  );
  const data = await response.json();
  console.log(data);
  return data;
}

//fetch all filters together to make it easy

export async function fetchFilteredCharacters({
  name,
  status,
  gender,
  species,
  pageNum,
}) {
  let url = `https://rickandmortyapi.com/api/character/?page=${pageNum}`;
  if (name) url += `&name=${name}`;
  if (status) url += `&status=${status}`;
  if (gender) url += `&gender=${gender}`;
  if (species) url += `&species=${species}`;

  try {
    const response = await fetch(url);
    if (!response.ok) return { results: [], info: { pages: 1 } };
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Combined filter fetch failed:", error);
    return { results: [], info: { pages: 1 } };
  }
}
