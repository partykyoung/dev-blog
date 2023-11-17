import { css } from '@emotion/react';

import type { HTMLAttributes } from 'react';

type Props = {
    tag: string;
} & HTMLAttributes<HTMLSpanElement>

function Tag({tag, ...props}: Props) {
    return (
        <span css={cssProps.root} {...props}>{tag}</span>
    )
}

const cssProps = {
    root: css({
        backgroundColor: 'hsla(var(--palette-blue-10), 100%)',
        borderRadius: 4,
        color: 'hsla(var(--palette-gray-80), 100%)',
        fontSize: 14,
        padding: '4px 16px',
    })
}

export default Tag;