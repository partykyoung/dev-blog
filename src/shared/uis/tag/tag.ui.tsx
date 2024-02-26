import { clsx } from "clsx";

import type { HTMLAttributes } from "react";

import { tagRoot } from "./tag.module.css";

type Props = {
<<<<<<< HEAD
  tag: string;
} & HTMLAttributes<HTMLSpanElement>;

function Tag({ className, tag, ...props }: Props) {
  return (
    <span className={clsx(tagRoot, className)} {...props}>
      {tag}
=======
  text: string;
} & HTMLAttributes<HTMLSpanElement>;

function Tag({ className, text, ...props }: Props) {
  return (
    <span className={clsx(tagRoot, className)} {...props}>
      {text}
>>>>>>> 7c4c06c (refactor: 공통 컴포넌트 fsd 아키텍처로 재작업)
    </span>
  );
}

<<<<<<< HEAD
export type { Props as TagProps };
=======
>>>>>>> 7c4c06c (refactor: 공통 컴포넌트 fsd 아키텍처로 재작업)
export { Tag };
