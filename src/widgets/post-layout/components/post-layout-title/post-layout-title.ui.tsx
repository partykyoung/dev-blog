import { clsx } from "clsx";
import { postLayoutTitleRoot } from "./post-layout-title.module.css";
import { HTMLAttributes } from "react";

type Props = { title: string } & HTMLAttributes<HTMLHeadingElement>;

function PostLayoutTitle({ className, title, ...props }: Props) {
  return (
    <h1 className={clsx(postLayoutTitleRoot, className)} {...props}>
      {title}
    </h1>
  );
}

export { PostLayoutTitle };
