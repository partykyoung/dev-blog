import { navigate } from 'gatsby'


function Posts() {
    if (typeof window === 'undefined') {
        return null;
    }
    
    return navigate('/');
}

export default Posts;