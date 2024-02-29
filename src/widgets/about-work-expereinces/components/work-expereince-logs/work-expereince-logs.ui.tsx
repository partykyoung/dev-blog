import { Tags } from "@/entities/tags";

import {
  workExpereinceLogDescription,
  workExpereinceLogDescriptions,
  workExpereinceLogsRoot,
  workExpereinceLogPeriod,
  workExpereinceLogProject,
  workExpereinceLogTags,
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
          <Tags className={workExpereinceLogTags} tags={tags} />
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
