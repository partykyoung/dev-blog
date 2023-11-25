import { navigate } from 'gatsby';

function PostsPage() {
  if (typeof window === 'undefined') {
    return null;
  }

  return navigate('/');
}

export default PostsPage;
