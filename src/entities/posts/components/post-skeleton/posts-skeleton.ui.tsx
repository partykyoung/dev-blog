import { Skeleton } from "@/shared/uis/skeleton";

import {
  postsSkeletonTitle,
  postsSkeletonContent,
} from "./posts-skeleton.module.css";

function PostSkeleton() {
  return (
    <li>
      <Skeleton className={postsSkeletonTitle} />
      <Skeleton className={postsSkeletonContent} />
      <Skeleton className={postsSkeletonContent} />
    </li>
  );
}

export { PostSkeleton };
