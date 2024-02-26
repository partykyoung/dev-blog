import { clsx } from "clsx";
import type { PropsWithChildren, HTMLAttributes } from "react";

type WorkExpereinceProps = PropsWithChildren & HTMLAttributes<HTMLDivElement>;

function WorkExpereince({ children, className }: WorkExpereinceProps) {
  return <div className={clsx(className)}>{children}</div>;
}

export { WorkExpereince };
