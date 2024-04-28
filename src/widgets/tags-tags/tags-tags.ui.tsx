import { Link } from 'gatsby';
import { Tags } from '@/entities/tags';

import { useAllTagsQuery } from './tags-tags.queries';

import { tagsRoot, tag as tagStyle, tagLink } from './tags-tags.module.css';

function TagsTags() {
  const data = useAllTagsQuery();

  return (
    <Tags className={tagsRoot}>
      {(data?.allMdx?.group ?? []).map(({ tag, totalCount }) => (
        <Link key={tag} to={`/tags/${tag}`} className={tagLink}>
          <Tags.Tag tag={`${tag} (${totalCount})`} className={tagStyle} />
        </Link>
      ))}
    </Tags>
  );
}

export { TagsTags };
