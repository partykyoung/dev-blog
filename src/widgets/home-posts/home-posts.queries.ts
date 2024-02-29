import { useInfiniteQuery } from "@tanstack/react-query";

import { fetchPosts } from "./home-posts.api";

function useGetPostsInfiniteQuery() {
  return useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    initialPageParam: 1,
<<<<<<< HEAD
    getNextPageParam: (lastPage) => {
      const { currentPage, limit, posts } = lastPage;

      return posts.length >= limit ? currentPage + 1 : undefined;
    },
=======
    getNextPageParam: (lastPage) => lastPage.nextCursor,
>>>>>>> ebf7538 (refactor: fsd 패턴에 맞춰 블로그 목록 리팩토링)
  });
}

export { useGetPostsInfiniteQuery };
