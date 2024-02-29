export function reduceInfinitePagesToList(pages: unknown[]) {
  if (!pages) return [];
  return pages.reduce((acc, cur) => [...acc, ...(cur.posts || [])], []);
}
