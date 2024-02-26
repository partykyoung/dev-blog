import { clsx } from "clsx";
import type {
  LiHTMLAttributes,
  HTMLAttributes,
  PropsWithChildren,
} from "react";
import { Tag, type TagProps } from "../../../../shared/uis/tag";

import {
  workExpereinceLogDescriptionsRoot,
  workExpereinceLogDescriptionRoot,
  workExpereinceLogPeriodRoot,
  workExpereinceLogProjectRoot,
  workExpereinceLogTagsRoot,
} from "./work-expereince-logs.module.css";

type WorkExpereinceLogTagsProps = PropsWithChildren &
  HTMLAttributes<HTMLDivElement>;

type WorkExpereinceLogDescriptionProps = {
  text: string;
} & LiHTMLAttributes<HTMLLIElement>;

type WorkExpereinceLogDescriptionsProps = PropsWithChildren &
  HTMLAttributes<HTMLUListElement>;

type WorkExpereinceLogPeriodProps = {
  text: string;
} & HTMLAttributes<HTMLSpanElement>;

type WorkExpereinceLogProjectProps = {
  text: string;
} & HTMLAttributes<HTMLHeadingElement>;

type WorkExpereinceLogsProps = PropsWithChildren &
  HTMLAttributes<HTMLDivElement>;

function WorkExpereinceLogTag({ className, ...props }: TagProps) {
  return <Tag className={clsx(className)} {...props} />;
}

function WorkExpereinceLogTags({
  children,
  className,
  ...props
}: WorkExpereinceLogTagsProps) {
  return (
    <div className={clsx(workExpereinceLogTagsRoot, className)} {...props}>
      {children}
    </div>
  );
}

function WorkExpereinceLogDescription({
  className,
  text,
  ...props
}: WorkExpereinceLogDescriptionProps) {
  return (
    <li
      className={clsx(workExpereinceLogDescriptionRoot, className)}
      {...props}
    >
      {text}
    </li>
  );
}

function WorkExpereinceLogDescriptions({
  children,
  className,
  ...props
}: WorkExpereinceLogDescriptionsProps) {
  return (
    <ul
      className={clsx(workExpereinceLogDescriptionsRoot, className)}
      {...props}
    >
      {children}
    </ul>
  );
}

function WorkExpereinceLogPeriod({
  className,
  text,
}: WorkExpereinceLogPeriodProps) {
  return (
    <span className={clsx(workExpereinceLogPeriodRoot, className)}>{text}</span>
  );
}

function WorkExpereinceLogProject({
  className,
  text,
  ...props
}: WorkExpereinceLogProjectProps) {
  return (
    <h4 className={clsx(workExpereinceLogProjectRoot, className)} {...props}>
      {text}
    </h4>
  );
}

function WorkExpereinceLogs({
  children,
  className,
  ...props
}: WorkExpereinceLogsProps) {
  return (
    <div className={clsx(className)} {...props}>
      {children}
    </div>
  );
}

const ComposedWorkExpereinceLogs = Object.assign(WorkExpereinceLogs, {
  Description: WorkExpereinceLogDescription,
  Descriptions: WorkExpereinceLogDescriptions,
  Project: WorkExpereinceLogProject,
  Period: WorkExpereinceLogPeriod,
  Tag: WorkExpereinceLogTag,
  Tags: WorkExpereinceLogTags,
});

export { ComposedWorkExpereinceLogs as WorkExpereinceLogs };
