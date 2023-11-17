import { css } from '@emotion/react';

import { mqMin } from '../../commons/styles/mediaQuery';

import type { HTMLAttributes, ReactNode } from 'react';

type Props = {
    children: ReactNode;
} & HTMLAttributes<HTMLSpanElement>

function Container({children, ...props}: Props) {
    return (
        <div css={cssProps.root} {...props}>{children}</div>
    )
};

const cssProps = {
    root: css({
      width: '100%',
      padding: '115px 16px 76px',
  
      [mqMin('sm')]: {
        paddingLeft: 20,
        paddingRight: 20
      },
  
      [mqMin('lg')]: {
        width: 768,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    })
  };
  

export default Container;