import { Posts } from "../../entities/posts";

import { useGetPostsInfiniteQuery } from "./home-posts.queries";

import { reduceInfinitePagesToList } from "../../shared/utils/reduce-infinite-pages-to-list";

function HomePosts() {
<<<<<<< HEAD
  const { data, hasNextPage, isLoading, fetchNextPage } =
    useGetPostsInfiniteQuery();
=======
  const { data } = useGetPostsInfiniteQuery();
>>>>>>> ebf7538 (refactor: fsd 패턴에 맞춰 블로그 목록 리팩토링)
  const posts = reduceInfinitePagesToList(data?.pages);

  return (
    <Posts>
      {posts.length <= 0 && <Posts.Empty />}
      {posts.length > 0 && (
        <Posts.List>
          {posts.map(({ excerpt, title, slug }) => (
            <Posts.ListItem excerpt={excerpt} title={title} link={slug} />
          ))}
<<<<<<< HEAD
          {isLoading && <Posts.Skeleton />}
        </Posts.List>
      )}

      {hasNextPage && <Posts.MoreButton onClick={fetchNextPage} />}
=======
        </Posts.List>
      )}
>>>>>>> ebf7538 (refactor: fsd 패턴에 맞춰 블로그 목록 리팩토링)
    </Posts>
  );
}

export { HomePosts };
