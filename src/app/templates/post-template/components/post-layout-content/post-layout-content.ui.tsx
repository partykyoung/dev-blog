import { clsx } from "clsx";
import { type HTMLAttributes, type PropsWithChildren } from "react";

import { postLayoutContentRoot } from "./post-layout.content.module.css";

type Props = PropsWithChildren & HTMLAttributes<HTMLDivElement>;

function PostLayoutContent({ children, className, ...props }: Props) {
  return (
    <div className={clsx(postLayoutContentRoot, className)} {...props}>
      {children}
    </div>
  );
}

export { PostLayoutContent };
