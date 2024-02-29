import { Tags } from "@/entities/tags";
import { Link } from "gatsby";

import { postLayoutTags } from "./post-layout.module.css";

type Props = { tags: string[] };

function PostLayoutTags({ tags }: Props) {
  return (
    <Tags className={postLayoutTags}>
      {tags.map((tag) => (
        <Link key={tag} to={`/tags/${tag}`}>
          <Tags.Tag tag={tag} />
        </Link>
      ))}
    </Tags>
  );
}

export { PostLayoutTags };
