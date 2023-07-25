const BASE_URL = "https://itunes.apple.com"

export async function getSongList({ offset = 1, searchTerm = "sonu" }) {
  let query = "";

  if (offset) {
    query += `offset=${offset}&`;
  }

  query += `term=${searchTerm.length ? searchTerm : "sonu"}&`;

  const res = await fetch(`${BASE_URL}/search/?${query}limit=12`);
  const data = await res.json();
  return data;
}
