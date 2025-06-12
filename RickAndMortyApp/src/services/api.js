//to fetch the first page
import axios from "axios";
export async function fetchCharacters() {
  const response = await fetch(
    "https://rickandmortyapi.com/api/character?page=1"
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

//to fetch a character by its id using AXIOS:

export async function fetchCharacterById(id) {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  return response.data;
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

//episodes pages
export async function fetchEpisodesByPage(pageNum) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/episode?page=${pageNum}`
  );
  const data = await response.json();
  return data;
}

export async function fetchEpisodesById(id) {
  const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
  const data = await response.json();
  return data;
}

export async function fetchCharactersFromEpisodes(urls) {
  const ids = urls.map((url) => url.split("/").pop()).join(",");
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${ids}`
  );

  const data = await response.json();
  return Array.isArray(data) ? data : [data];
}

export async function fetchSearchFilterEpisodes(name, pageNum) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/episode?page=${pageNum}&name=${name}`
    );

    if (!response.ok) return { results: [], info: { pages: 1 } };
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Search failed:", error);
    return { results: [], info: { pages: 1 } };
  }
}

//location page
export async function fetchLocationByPage(pageNum) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/location?page=${pageNum}`
  );
  const data = await response.json();
  return data;
}

export async function fetchLocationById(id) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/location/${id}`
  );
  const data = await response.json();
  return data;
}

export async function fetchCharactersFromLocations(urls) {
  const ids = urls.map((url) => url.split("/").pop()).join(",");
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${ids}`
  );

  const data = await response.json();
  return Array.isArray(data) ? data : [data];
}

export async function fetchSearchFilterLocation(name, pageNum) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/location?page=${pageNum}&name=${name}`
    );

    if (!response.ok) return { results: [], info: { pages: 1 } };
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Search failed:", error);
    return { results: [], info: { pages: 1 } };
  }
}

export async function fetchFilteredLocations({
  name,
  type,
  dimension,
  pageNum,
}) {
  let url = `https://rickandmortyapi.com/api/location/?page=${pageNum}`;
  if (name) url += `&name=${name}`;
  if (type) url += `&type=${type}`;
  if (dimension) url += `&dimension=${dimension}`;

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
