import { PostsEmpty } from "./components/posts-empty";
import { PostList } from "./components/post-list";
import { PostListItem } from "./components/post-list-item";
import { PostSkeleton } from "./components/post-skeleton";

import { Posts } from "./posts.ui";

const ComposedPosts = Object.assign(Posts, {
  Empty: PostsEmpty,
  Skeleton: PostSkeleton,
  List: PostList,
  ListItem: PostListItem,
});

export { ComposedPosts as Posts };
