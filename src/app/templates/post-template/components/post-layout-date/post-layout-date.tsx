import { clsx } from "clsx";
import { type HTMLAttributes } from "react";

import { postLayoutDateRoot } from "./post-layout-date.module.css";

type Props = { date: string } & HTMLAttributes<HTMLHeadingElement>;

function PostLayoutDate({ className, date, ...props }: Props) {
  return (
    <span className={clsx(postLayoutDateRoot, className)} {...props}>
      {date}
    </span>
  );
}

export { PostLayoutDate };
