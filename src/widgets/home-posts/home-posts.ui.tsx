import { Posts } from "../../entities/posts";

import { useGetPostsInfiniteQuery } from "./home-posts.queries";

import { reduceInfinitePagesToList } from "../../shared/utils/reduce-infinite-pages-to-list";

function HomePosts() {
  const { data } = useGetPostsInfiniteQuery();
  const posts = reduceInfinitePagesToList(data?.pages);

  return (
    <Posts>
      {posts.length <= 0 && <Posts.Empty />}
      {posts.length > 0 && (
        <Posts.List>
          {posts.map(({ excerpt, title, slug }) => (
            <Posts.ListItem excerpt={excerpt} title={title} link={slug} />
          ))}
        </Posts.List>
      )}
    </Posts>
  );
}

export { HomePosts };
