import { clsx } from "clsx";
import type { PropsWithChildren, HTMLAttributes } from "react";

import { containerRoot } from "./container.module.css";

type Props = PropsWithChildren & HTMLAttributes<HTMLSpanElement>;

function Container({ children, className, ...props }: Props) {
  return (
    <div className={clsx(containerRoot, className)} {...props}>
      {children}
    </div>
  );
}

export { Container };
