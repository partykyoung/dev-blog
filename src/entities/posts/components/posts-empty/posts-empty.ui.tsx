import { clsx } from "clsx";

import type { HTMLAttributes } from "react";

import {
  postsEmptyRoot,
  postsEmptyComingSoon,
  postsEmptyText,
} from "./posts-empty.module.css";

function PostsEmpty({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx(postsEmptyRoot, className)} {...props}>
      <h3 className={postsEmptyComingSoon}>COMING SOON</h3>
      <br />
      <span className={postsEmptyText}>
        아직 등록된 포스트가 없어요
        <br />
        조금만 기다려주세요
      </span>
    </div>
  );
}

export { PostsEmpty };
