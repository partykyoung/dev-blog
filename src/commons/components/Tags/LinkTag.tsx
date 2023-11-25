import type { HTMLAttributes } from 'react';

import { Link } from 'gatsby';
import { css } from '@emotion/react';

import Tag from './Tag';

type Props = {
  link: string;
  tag: string;
} & HTMLAttributes<HTMLSpanElement>;

function LinkTag({ link, tag, ...props }: Props) {
  return (
    <Link to={link}>
      <Tag tag={tag} css={cssProps.tag} {...props} />
    </Link>
  );
}

const cssProps = {
  tag: {
    ['a:hover &']: {
      color: '#FFFFFF',
      backgroundColor: 'hsla(var(--palette-blue-50), 60%)',
      transitionProperty: 'color, background-color',
      transitionDuration: '0.25s',
      transitionTimingFunction: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      transitionDelay: '0s',
    },
  },
};

export default LinkTag;
