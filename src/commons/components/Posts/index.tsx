import PostsRoot from "./PostsRoot";

import EmptyPost from "./EmptyPost";
import FetchPostLoader from './FetchPostLoader';
import PostList from "./PostList";
import PostListItem from "./PostListItem";

const Posts = Object.assign(PostsRoot, {
    EmptyPost,
    FetchPostLoader,
    PostList,
    PostListItem
});

export default Posts;
