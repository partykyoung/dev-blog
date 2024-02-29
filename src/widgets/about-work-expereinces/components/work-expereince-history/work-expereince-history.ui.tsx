import { clsx } from "clsx";

import type { TableHTMLAttributes } from "react";

import {
  workExpereinceHistory,
  workExpereinceHistoryTh,
  workExpereinceHistorySlash,
} from "./work-expereince-history.module.css";

type WorkExpereinceHistoryProps = {
  period: string;
  team: string;
  teamPosition: string;
} & TableHTMLAttributes<HTMLTableElement>;

function WorkExpereinceHistory({
  className,
  period,
  team,
  teamPosition,
  ...props
}: WorkExpereinceHistoryProps) {
  return (
    <table className={clsx(workExpereinceHistory, className)} {...props}>
      <tbody>
        <tr>
          <th className={workExpereinceHistoryTh}>period</th>
          <td>{period}</td>
        </tr>
        <tr>
          <th className={workExpereinceHistoryTh}>position</th>
          <td>
            <span>{team}</span>
            <span className={workExpereinceHistorySlash}>/</span>
            <span>{teamPosition}</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
export { WorkExpereinceHistory };
