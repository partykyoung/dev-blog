import { Link } from "gatsby";
import { clsx } from "clsx";

import {
  postListItemExcerpt,
  postListItemLink,
  postListItemRoot,
  postListItemTitle,
} from "./post-list-item.module.css";
import type { LiHTMLAttributes } from "react";

type Props = {
  excerpt: string;
  link: string;
  title: string;
} & LiHTMLAttributes<HTMLLIElement>;

function PostListItem({ className, excerpt, link, title }: Props) {
  return (
    <li className={clsx(postListItemRoot, className)}>
      <Link to={link} className={postListItemLink}>
        <h3 className={postListItemTitle}>{title}</h3>
        <p className={postListItemExcerpt}>{excerpt}</p>
      </Link>
    </li>
  );
}

export { PostListItem };
