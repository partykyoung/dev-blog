import { Posts } from "../../entities/posts";

import { useGetPostsInfiniteQuery } from "./home-posts.queries";

import { reduceInfinitePagesToList } from "../../shared/utils/reduce-infinite-pages-to-list";

function HomePosts() {
<<<<<<< HEAD
<<<<<<< HEAD
  const { data, hasNextPage, isLoading, fetchNextPage } =
    useGetPostsInfiniteQuery();
=======
  const { data } = useGetPostsInfiniteQuery();
>>>>>>> ebf7538 (refactor: fsd 패턴에 맞춰 블로그 목록 리팩토링)
=======
  const { data, hasNextPage, isLoading, fetchNextPage } =
    useGetPostsInfiniteQuery();
>>>>>>> 011c246 (imp: 포스트 목록 고도화)
  const posts = reduceInfinitePagesToList(data?.pages);

  return (
    <Posts>
<<<<<<< HEAD
      {posts.length <= 0 && <Posts.Empty />}
      {posts.length > 0 && (
        <Posts.List>
          {posts.map(({ excerpt, title, slug }) => (
            <Posts.ListItem excerpt={excerpt} title={title} link={slug} />
          ))}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 011c246 (imp: 포스트 목록 고도화)
          {isLoading && <Posts.Skeleton />}
        </Posts.List>
=======
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
>>>>>>> c84ca6c (feat: 블로그 리팩토링 하면서 고려한 것들 포스팅 작성 완료, github 정적 호스팅 세팅)
      )}
      {hasNextPage && <Posts.MoreButton onClick={fetchNextPage} />}
<<<<<<< HEAD
=======
        </Posts.List>
      )}
>>>>>>> ebf7538 (refactor: fsd 패턴에 맞춰 블로그 목록 리팩토링)
=======
>>>>>>> 011c246 (imp: 포스트 목록 고도화)
    </Posts>
  );
}

export { HomePosts };
