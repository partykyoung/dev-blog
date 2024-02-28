import { PostsEmpty } from "./components/posts-empty";
import { PostList } from "./components/post-list";
import { PostListItem } from "./components/post-list-item";
import { PostSkeleton } from "./components/post-skeleton";
<<<<<<< HEAD
import { PostMoreButton } from "./components/post-more-button/post-more-button.ui";
=======
>>>>>>> d8737b0 (refactor: fsd 아키텍쳐에 맞춰 posts 컴포넌트 리팩토링)

import { Posts } from "./posts.ui";

const ComposedPosts = Object.assign(Posts, {
  Empty: PostsEmpty,
<<<<<<< HEAD
  List: PostList,
  ListItem: PostListItem,
  MoreButton: PostMoreButton,
  Skeleton: PostSkeleton,
=======
  Skeleton: PostSkeleton,
  List: PostList,
  ListItem: PostListItem,
>>>>>>> d8737b0 (refactor: fsd 아키텍쳐에 맞춰 posts 컴포넌트 리팩토링)
});

export { ComposedPosts as Posts };
