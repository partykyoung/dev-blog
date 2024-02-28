import { clsx } from "clsx";
import type { HTMLAttributes, PropsWithChildren } from "react";

import { postsRoot } from "./posts.module.css";

type Props = PropsWithChildren & HTMLAttributes<HTMLDivElement>;

function Posts({ children, className, ...props }: Props) {
  return (
    <div className={clsx(postsRoot, className)} {...props}>
      {children}
    </div>
  );
}

export { Posts };
