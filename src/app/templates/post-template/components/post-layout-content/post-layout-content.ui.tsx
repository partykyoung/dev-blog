import { clsx } from "clsx";
import { type HTMLAttributes, type PropsWithChildren } from "react";

import { postLayoutContentRoot } from "./post-layout.content.module.css";

type Props = PropsWithChildren & HTMLAttributes<HTMLDivElement>;

function PostLayoutContent({ children, className, ...props }: Props) {
  console.log(children);

  return (
    <div className={clsx(postLayoutContentRoot, className)} {...props}>
      {children}
      123465
    </div>
  );
}

export { PostLayoutContent };
