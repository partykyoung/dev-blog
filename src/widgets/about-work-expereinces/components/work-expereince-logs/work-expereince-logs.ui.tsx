<<<<<<< HEAD
import { WorkExperenceTags } from "../work-expereince-tags/work-expereince-tags.ui";
=======
import { Tags } from "@/entities/tags";

>>>>>>> cc4cb6c (refactor: about 페이지 정리)
import {
  workExpereinceLogDescription,
  workExpereinceLogDescriptions,
  workExpereinceLogsRoot,
  workExpereinceLogPeriod,
  workExpereinceLogProject,
<<<<<<< HEAD
=======
  workExpereinceLogTags,
>>>>>>> cc4cb6c (refactor: about 페이지 정리)
} from "./work-expereince-logs.module.css";

type Props = {
  logs: {
    descriptions: string[];
    project: string;
    projectPeriod: string;
    tags: string[];
  }[];
};

function WorkExpereinceLogs({ logs }: Props) {
  return (
    <>
      {logs.map(({ descriptions, project, projectPeriod, tags }) => (
        <div key={project} className={workExpereinceLogsRoot}>
          <h4 className={workExpereinceLogProject}>{project}</h4>
          <span className={workExpereinceLogPeriod}>{projectPeriod}</span>
<<<<<<< HEAD
          <WorkExperenceTags tags={tags} />
=======
          <Tags className={workExpereinceLogTags} tags={tags} />
>>>>>>> cc4cb6c (refactor: about 페이지 정리)
          <ul className={workExpereinceLogDescriptions}>
            {descriptions.map((description) => (
              <li key={description} className={workExpereinceLogDescription}>
                {description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export { WorkExpereinceLogs };
