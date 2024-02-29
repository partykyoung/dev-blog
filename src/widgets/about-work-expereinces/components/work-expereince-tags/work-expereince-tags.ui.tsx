import { Tags } from "@/entities/tags";

import { workExpereinceLogTagsRoot } from "./work-expereince-tags.module.css";

type Props = {
  tags: string[];
};

function WorkExperenceTags({ tags }: Props) {
  return (
    <Tags className={workExpereinceLogTagsRoot}>
      {tags.map((tag) => (
        <Tags.Tag key={tag} tag={tag} />
      ))}
    </Tags>
  );
}

export { WorkExperenceTags };
