import { clsx } from "clsx";

import type { HTMLAttributes, PropsWithChildren } from "react";

import { postListRoomt } from "./post-list.module.css";

type Props = PropsWithChildren & HTMLAttributes<HTMLUListElement>;

function PostList({ children, className, ...props }: Props) {
  return (
    <ul className={clsx(postListRoomt, className)} {...props}>
      {children}
    </ul>
  );
}

export { PostList };
