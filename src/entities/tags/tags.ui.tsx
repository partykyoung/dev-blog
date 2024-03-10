import { PropsWithChildren, type HTMLAttributes } from 'react';
import { clsx } from 'clsx';

import { tagsRoot } from './tags.module.css';

type Props = PropsWithChildren & HTMLAttributes<HTMLDivElement>;

function Tags({ children, className, ...props }: Props) {
  return (
    <div className={clsx(tagsRoot, className)} {...props}>
      {children}
    </div>
  );
}

export { Tags };
