import { clsx } from "clsx";
import type { PropsWithChildren, HTMLAttributes } from "react";

type Props = PropsWithChildren & HTMLAttributes<HTMLSpanElement>;

function Container({ children, className, ...props }: Props) {
  return (
    <div className={clsx(className)} {...props}>
      {children}
    </div>
  );
}

export { Container };
