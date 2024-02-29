async function fetchPosts({ pageParam }: { pageParam: number }) {
  const response = await fetch(`./jsons/page${pageParam}.json`);
  const page = await response.json();

  return page;
}

export { fetchPosts };
