import { css } from '@emotion/react';

type Props = {
    tag: string;
}

function Tag({tag}: Props) {
    return (
        <span css={cssProps.root}>{tag}</span>
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