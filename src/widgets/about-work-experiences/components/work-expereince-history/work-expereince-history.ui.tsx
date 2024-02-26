import { clsx } from "clsx";

import type {
  PropsWithChildren,
  TableHTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from "react";

import {
  workExpereinceHistory,
  workExpereinceHistoryTh,
} from "./work-expereince-history.module.css";

type WorkExpereinceHistoryThProps = {
  text: string;
} & ThHTMLAttributes<HTMLTableCellElement>;
type WorkExpereinceHistoryTdProps = PropsWithChildren &
  TdHTMLAttributes<HTMLTableCellElement>;
type WorkExpereinceHistoryProps = PropsWithChildren &
  TableHTMLAttributes<HTMLTableElement>;

function WorkExpereinceHistoryTh({
  className,
  text,
  ...props
}: WorkExpereinceHistoryThProps) {
  return (
    <th className={clsx(workExpereinceHistoryTh, className)} {...props}>
      {text}
    </th>
  );
}

function WorkExpereinceHistoryTd(props: WorkExpereinceHistoryTdProps) {
  return <td {...props} />;
}

function WorkExpereinceHistory({
  className,
  ...props
}: WorkExpereinceHistoryProps) {
  return (
    <table className={clsx(workExpereinceHistory, className)} {...props} />
  );
}

const ComposedWorkExpereinceHistory = Object.assign(WorkExpereinceHistory, {
  Td: WorkExpereinceHistoryTd,
  Th: WorkExpereinceHistoryTh,
});

export { ComposedWorkExpereinceHistory as WorkExpereinceHistory };
