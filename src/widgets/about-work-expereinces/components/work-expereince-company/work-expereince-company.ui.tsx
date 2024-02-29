import { clsx } from "clsx";
import type { HTMLAttributes } from "react";

import {
  workExpereinceCompanyRoot,
  workExpereinceCompanySubText,
} from "./work-expereince-company.module.css";

type Props = {
  company: string;
  description?: string;
} & HTMLAttributes<HTMLSpanElement>;

function WorkExpereinceCompany({
  className,
  company,
  description,
  ...props
}: Props) {
  return (
    <h3 className={clsx(workExpereinceCompanyRoot, className)} {...props}>
      {company}
      {!!description && (
        <span className={workExpereinceCompanySubText}>({description})</span>
      )}
    </h3>
  );
}

export { WorkExpereinceCompany };
