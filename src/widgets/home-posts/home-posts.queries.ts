import { useInfiniteQuery } from "@tanstack/react-query";

import { fetchPosts } from "./home-posts.api";

function useGetPostsInfiniteQuery() {
  return useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
}

export { useGetPostsInfiniteQuery };
