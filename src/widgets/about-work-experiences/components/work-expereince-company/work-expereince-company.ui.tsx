import { clsx } from "clsx";
import type { HTMLAttributes } from "react";

import {
  workExpereinceCompanyRoot,
  workExpereinceCompanySubText,
} from "./work-expereince-company.module.css";

type Props = {
  text: string;
  subText?: string;
} & HTMLAttributes<HTMLSpanElement>;

function WorkExpereinceCompany({ className, text, subText, ...props }: Props) {
  return (
    <h3 className={clsx(workExpereinceCompanyRoot, className)} {...props}>
      {text}
      {!!subText && (
        <span className={workExpereinceCompanySubText}>({subText})</span>
      )}
    </h3>
  );
}

export { WorkExpereinceCompany };
