<<<<<<< HEAD
import { PropsWithChildren, type HTMLAttributes } from "react";
import { clsx } from "clsx";

import { tagsRoot } from "./tags.module.css";

type Props = PropsWithChildren & HTMLAttributes<HTMLDivElement>;

function Tags({ children, className, ...props }: Props) {
  return (
    <div className={clsx(tagsRoot, className)} {...props}>
      {children}
=======
import { type HTMLAttributes } from "react";
import { Link } from "gatsby";
import { clsx } from "clsx";

import { Tag } from "../../shared/uis/tag";

import { tagsRoot } from "./tags.module.css";

type Props = {
  tags: string[] | { tag: string; link: string }[];
} & HTMLAttributes<HTMLDivElement>;

function Tags({ className, tags, ...props }: Props) {
  return (
    <div className={clsx(tagsRoot, className)} {...props}>
      {tags.map((tag) => {
        if (typeof tag === "string") {
          return <Tag key={tag} text={tag} />;
        }

        return (
          <Link key={tag.link} to={tag.link}>
            <Tag text={tag.tag} />
          </Link>
        );
      })}
>>>>>>> a7f252a (refactor: 블로그 게시글 상세 페이지 fsd 아키텍처에 맞춰 리팩토링)
    </div>
  );
}

export { Tags };
