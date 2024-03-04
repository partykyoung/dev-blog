import { Posts } from "../../entities/posts";

import { useGetPostsInfiniteQuery } from "./home-posts.queries";

import { reduceInfinitePagesToList } from "../../shared/utils/reduce-infinite-pages-to-list";

function HomePosts() {
  const { data, hasNextPage, isLoading, fetchNextPage } =
    useGetPostsInfiniteQuery();
  const posts = reduceInfinitePagesToList(data?.pages);

  return (
    <Posts>
      {data && (
        <>
          {posts.length <= 0 && <Posts.Empty />}
          {posts.length > 0 && (
            <Posts.List>
              {posts.map(({ excerpt, title, slug }) => (
                <Posts.ListItem excerpt={excerpt} title={title} link={slug} />
              ))}
              {isLoading && <Posts.Skeleton />}
            </Posts.List>
          )}
        </>
      )}
      {hasNextPage && <Posts.MoreButton onClick={fetchNextPage} />}
    </Posts>
  );
}

export { HomePosts };
