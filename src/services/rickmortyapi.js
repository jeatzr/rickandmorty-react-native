const API = "https://rickandmortyapi.com/api/";

export async function getCharactersByPage(page = 1) {
  const data = await fetch(`${API}character/?page=${page}`);
  const json = await data.json();
  return json;
}