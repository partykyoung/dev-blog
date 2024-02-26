import { clsx } from "clsx";

import type { HTMLAttributes } from "react";

import { tagRoot } from "./tag.module.css";

type Props = {
  text: string;
} & HTMLAttributes<HTMLSpanElement>;

function Tag({ className, text, ...props }: Props) {
  return (
    <span className={clsx(tagRoot, className)} {...props}>
      {text}
    </span>
  );
}

export { Tag };
