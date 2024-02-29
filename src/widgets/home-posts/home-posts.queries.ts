import { useInfiniteQuery } from "@tanstack/react-query";

import { fetchPosts } from "./home-posts.api";

function useGetPostsInfiniteQuery() {
  return useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { currentPage, limit, posts } = lastPage;

      return posts.length >= limit ? currentPage + 1 : undefined;
    },
  });
}

export { useGetPostsInfiniteQuery };
