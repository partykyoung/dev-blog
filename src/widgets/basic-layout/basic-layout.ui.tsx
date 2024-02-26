<<<<<<< HEAD
import { clsx } from "clsx";
import { type HTMLAttributes, type PropsWithChildren } from "react";

import { basicLayoutRoot } from "./basic-layout.module.css";

type Props = PropsWithChildren & HTMLAttributes<HTMLDivElement>;

function BasicLayout({ children, className, ...props }: Props) {
  return (
    <div className={clsx(basicLayoutRoot, className)} {...props}>
      {children}
    </div>
  );
=======
import type { PropsWithChildren } from "react";

import { basicLayoutRoot } from "./basic-layout.module.css";

function BasicLayout({ children }: PropsWithChildren) {
  return <div className={basicLayoutRoot}>{children}</div>;
>>>>>>> 4704d73 (refactor: fsd 아키텍처 구조에 맞게 레이아웃 재작업)
}

export { BasicLayout };
