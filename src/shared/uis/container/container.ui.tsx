import { clsx } from "clsx";
import type { PropsWithChildren, HTMLAttributes } from "react";

<<<<<<< HEAD
import { containerRoot } from "./container.module.css";

=======
>>>>>>> 7c4c06c (refactor: 공통 컴포넌트 fsd 아키텍처로 재작업)
type Props = PropsWithChildren & HTMLAttributes<HTMLSpanElement>;

function Container({ children, className, ...props }: Props) {
  return (
<<<<<<< HEAD
    <div className={clsx(containerRoot, className)} {...props}>
=======
    <div className={clsx(className)} {...props}>
>>>>>>> 7c4c06c (refactor: 공통 컴포넌트 fsd 아키텍처로 재작업)
      {children}
    </div>
  );
}

export { Container };
