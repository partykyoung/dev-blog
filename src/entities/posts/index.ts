import { PostsEmpty } from './components/posts-empty';
import { PostList } from './components/post-list';
import { PostListItem } from './components/post-list-item';
import { PostSkeleton } from './components/post-skeleton';
import { PostMoreButton } from './components/post-more-button/post-more-button.ui';

import { Posts } from './posts.ui';

const ComposedPosts = Object.assign(Posts, {
  Empty: PostsEmpty,
  List: PostList,
  ListItem: PostListItem,
  MoreButton: PostMoreButton,
  Skeleton: PostSkeleton,
});

export { ComposedPosts as Posts };
