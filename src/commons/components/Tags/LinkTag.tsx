import { Link } from "gatsby";
import { css } from '@emotion/react';

import Tag from './Tag';

type Props = {
    tag: string;
}

function LinkTag({tag}: Props) {
    return <Link to={`/tags/${tag}`}><Tag tag={tag} css={cssProps.tag} /></Link>
}

const cssProps = {
    tag: {
        ['a:hover &']: {
            color: 'hsla(var(--base-gray), 43%)',
            backgroundColor: 'hsla(var(--palette-blue-10), 60%)',
            transitionProperty: 'color, background-color',
            transitionDuration: '0.25s',
            transitionTimingFunction: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
            transitionDelay: '0s'

        }
    }
}

export default LinkTag;