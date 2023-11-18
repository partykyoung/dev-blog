import { css } from '@emotion/react';

import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
}

function PostList({children}: Props) {
    return (
        <ul css={cssProps.root}>
            {children}     
        </ul>
    )
}

const cssProps = {
    root: css({
        width: '100%',
    })
}

export default PostList;