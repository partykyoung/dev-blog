import { Link } from 'gatsby';
import { css } from '@emotion/react';

type Props = {
    excerpt: string;
    link: string;
    title: string;
}

function PostListItem({
    link,
    title,
    excerpt
}: Props) {
    return (
        <li css={cssProps.root}>
            <Link to={link} css={cssProps.postLink}>
                <h3 css={cssProps.postTitle}>{title}</h3>
                <p css={cssProps.postExcerpt}>{excerpt}</p>
            </Link>
        </li>
    );
}

const cssProps = {
    root: css({
        width: '100%',
        listStyle: 'none',
        ['&:not(:last-of-type)']: {
            marginBottom: 60
        }
    }),
    postLink: css({
        color: '#000000',

    }),
    postTitle: css({
        marginBottom: 8,
        fontSize: 20,
        fontWeight: 600,

        ['a:hover &']: {
            color: 'hsla(var(--base-blue), 29%)',
            transition: 'color 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s'     
         }

    }),
    postExcerpt: css({
        lineHeight: 1.5,
        fontSize: 15,
        fontWeight: 400,

        ['a:hover &']: {
            color: 'hsla(var(--base-blue), 39%)',
            transition: 'color 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s'     
         }
    })
}

export default PostListItem;