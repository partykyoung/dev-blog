import { HTMLAttributes } from "react";
import { skeletonRoot } from "./skeleton.module.css";
import { clsx } from "clsx";

type Props = HTMLAttributes<HTMLDivElement>;

function Skeleton({ className, ...props }: Props) {
  return <div className={clsx(skeletonRoot, className)} {...props} />;
}

export { Skeleton };
