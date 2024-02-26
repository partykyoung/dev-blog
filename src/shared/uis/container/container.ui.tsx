import { clsx } from "clsx";
import type { PropsWithChildren, HTMLAttributes } from "react";

<<<<<<< HEAD
<<<<<<< HEAD
import { containerRoot } from "./container.module.css";

=======
>>>>>>> 7c4c06c (refactor: 공통 컴포넌트 fsd 아키텍처로 재작업)
=======
import { containerRoot } from "./container.module.css";

>>>>>>> e23180d (refactor: about 페이지 fsd 아키텍처에 맞춰 리팩토링)
type Props = PropsWithChildren & HTMLAttributes<HTMLSpanElement>;

function Container({ children, className, ...props }: Props) {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className={clsx(containerRoot, className)} {...props}>
=======
    <div className={clsx(className)} {...props}>
>>>>>>> 7c4c06c (refactor: 공통 컴포넌트 fsd 아키텍처로 재작업)
=======
    <div className={clsx(containerRoot, className)} {...props}>
>>>>>>> e23180d (refactor: about 페이지 fsd 아키텍처에 맞춰 리팩토링)
      {children}
    </div>
  );
}

export { Container };
