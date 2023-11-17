import { css } from '@emotion/react';

import type { HTMLAttributes, ReactNode } from 'react';

type Props = {
    children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

function TagsRoot({children, ...props}: Props) {
    return (
        <div {...props} css={cssProps.root}>{children}</div>
    )
}

const cssProps = {
    root: css({
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px 6px',
    })
}

export default TagsRoot;