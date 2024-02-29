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
    </div>
  );
}

export { Tags };
