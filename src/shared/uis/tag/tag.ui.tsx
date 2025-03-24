import { clsx } from 'clsx';

import type { HTMLAttributes, ReactNode } from 'react';

import { tagRoot } from './tag.module.css';

type Props = {
  tag: ReactNode;
} & HTMLAttributes<HTMLSpanElement>;

function Tag({ className, tag, ...props }: Props) {
  return (
    <span className={clsx(tagRoot, className)} {...props}>
      {tag}
    </span>
  );
}

export type { Props as TagProps };
export { Tag };
