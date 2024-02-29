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
}

export { BasicLayout };
