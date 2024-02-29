<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 011c246 (imp: 포스트 목록 고도화)
import { Skeleton } from "@/shared/uis/skeleton";

import {
  postsSkeletonTitle,
  postsSkeletonContent,
} from "./posts-skeleton.module.css";
<<<<<<< HEAD
=======
import { Skeleton } from "../../../../shared/uis/skeleton";
>>>>>>> d8737b0 (refactor: fsd 아키텍쳐에 맞춰 posts 컴포넌트 리팩토링)
=======
>>>>>>> 011c246 (imp: 포스트 목록 고도화)

function PostSkeleton() {
  return (
    <li>
<<<<<<< HEAD
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
=======
      <Skeleton className={postsSkeletonTitle} />
      <Skeleton className={postsSkeletonContent} />
      <Skeleton className={postsSkeletonContent} />
>>>>>>> 011c246 (imp: 포스트 목록 고도화)
    </li>
  );
}

export { PostSkeleton };
