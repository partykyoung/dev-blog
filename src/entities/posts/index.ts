import { PostsEmpty } from "./components/posts-empty";
import { PostList } from "./components/post-list";
import { PostListItem } from "./components/post-list-item";
import { PostSkeleton } from "./components/post-skeleton";
<<<<<<< HEAD
<<<<<<< HEAD
import { PostMoreButton } from "./components/post-more-button/post-more-button.ui";
=======
>>>>>>> d8737b0 (refactor: fsd 아키텍쳐에 맞춰 posts 컴포넌트 리팩토링)
=======
import { PostMoreButton } from "./components/post-more-button/post-more-button.ui";
>>>>>>> 011c246 (imp: 포스트 목록 고도화)

import { Posts } from "./posts.ui";

const ComposedPosts = Object.assign(Posts, {
  Empty: PostsEmpty,
<<<<<<< HEAD
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
=======
  List: PostList,
  ListItem: PostListItem,
  MoreButton: PostMoreButton,
  Skeleton: PostSkeleton,
>>>>>>> 011c246 (imp: 포스트 목록 고도화)
});

export { ComposedPosts as Posts };
