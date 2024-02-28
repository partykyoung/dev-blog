import { clsx } from "clsx";

import type { HTMLAttributes, PropsWithChildren } from "react";

<<<<<<< HEAD
import { postListRoot } from "./post-list.module.css";
=======
import { postListRoomt } from "./post-list.module.css";
>>>>>>> d8737b0 (refactor: fsd 아키텍쳐에 맞춰 posts 컴포넌트 리팩토링)

type Props = PropsWithChildren & HTMLAttributes<HTMLUListElement>;

function PostList({ children, className, ...props }: Props) {
  return (
<<<<<<< HEAD
    <ul className={clsx(postListRoot, className)} {...props}>
=======
    <ul className={clsx(postListRoomt, className)} {...props}>
>>>>>>> d8737b0 (refactor: fsd 아키텍쳐에 맞춰 posts 컴포넌트 리팩토링)
      {children}
    </ul>
  );
}

export { PostList };
