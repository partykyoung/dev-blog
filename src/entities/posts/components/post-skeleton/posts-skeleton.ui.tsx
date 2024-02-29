<<<<<<< HEAD
import { Skeleton } from "@/shared/uis/skeleton";

import {
  postsSkeletonTitle,
  postsSkeletonContent,
} from "./posts-skeleton.module.css";
=======
import { Skeleton } from "../../../../shared/uis/skeleton";
>>>>>>> d8737b0 (refactor: fsd 아키텍쳐에 맞춰 posts 컴포넌트 리팩토링)

function PostSkeleton() {
  return (
    <li>
<<<<<<< HEAD
      <Skeleton className={postsSkeletonTitle} />
      <Skeleton className={postsSkeletonContent} />
      <Skeleton className={postsSkeletonContent} />
=======
      <Skeleton />
<<<<<<< HEAD
>>>>>>> d8737b0 (refactor: fsd 아키텍쳐에 맞춰 posts 컴포넌트 리팩토링)
=======
      <Skeleton />
      <Skeleton />
>>>>>>> b564d85 (refactor: fsd 패턴에 맞춰 블로그 레이아웃 생성)
    </li>
  );
}

export { PostSkeleton };
