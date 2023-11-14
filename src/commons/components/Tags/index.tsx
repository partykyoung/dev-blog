import { css } from '@emotion/react';

import type { HTMLAttributes} from 'react';

import Tag from "./Tag";

type Props = {
    tags: string[];
} & HTMLAttributes<HTMLDivElement>;

function Tags({tags, ...props}: Props) {
    return (
        <div {...props} css={cssProps.root}>{tags.map((tag) => <Tag tag={tag} key={tag} />)}</div>
    )
}

const cssProps = {
    root: css({
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px 6px',
    })
}

export default Tags;