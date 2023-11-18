import { css, keyframes } from '@emotion/react';

import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
}

function PostsRoot({children}: Props) {
    return (
        <div css={cssProps.root}>
            {children}     
        </div>
    )
}

const show = keyframes({
    from: {opacity: 0},
    to: {opacity: 1}
})

const cssProps = {
    root: css({
        width: '100%',
        animation: `0.6s ${show}`,
    })
}

export default PostsRoot;