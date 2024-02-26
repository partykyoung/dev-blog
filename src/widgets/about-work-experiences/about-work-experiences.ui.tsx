import { WorkExpereince } from "./components/work-expereince";
import { WorkExpereinceCompany } from "./components/work-expereince-company";
import { WorkExpereinceHistory } from "./components/work-expereince-history";
import { WorkExpereinceLogs } from "./components/work-expereince-logs";

import { WORK_EXPEREINCES } from "./about-work-expereinces.const";

import {
  aboutWorkExpereince,
  aboutWorkExpereincesBody,
  aboutWorkExpereinceCompany,
  aboutWorkExpereinceDescription,
  aboutWorkExpereinceDescriptions,
  aboutWorkExpereinceHistory,
  aboutWorkExpereinceHistorySlash,
  aboutWorkExpereinceLogs,
  aboutWorkExpereinceLogProject,
  aboutWorkExpereinceLogTags,
  aboutWorkExpereincesTitle,
} from "./about-work-experience.module.css";

function AboutWorkExpereinces() {
  return (
    <>
      <h2 className={aboutWorkExpereincesTitle}>Work Experience</h2>
      <div className={aboutWorkExpereincesBody}>
        {WORK_EXPEREINCES.map(
          ({
            company,
            companyDescription,
            period,
            team,
            teamPosition,
            logs,
          }) => (
            <WorkExpereince key={company} className={aboutWorkExpereince}>
              <WorkExpereinceCompany
                className={aboutWorkExpereinceCompany}
                subText={companyDescription}
                text={company}
              />
              <WorkExpereinceHistory className={aboutWorkExpereinceHistory}>
                <tr>
                  <WorkExpereinceHistory.Th text="period" />
                  <WorkExpereinceHistory.Td>{period}</WorkExpereinceHistory.Td>
                </tr>
                <tr>
                  <WorkExpereinceHistory.Th text="position" />
                  <WorkExpereinceHistory.Td>
                    <span>{team}</span>
                    <span className={aboutWorkExpereinceHistorySlash}>/</span>
                    <span>{teamPosition}</span>
                  </WorkExpereinceHistory.Td>
                </tr>
              </WorkExpereinceHistory>
              {logs.map(
                ({ descriptions, period: projectPeriod, project, tags }) => (
                  <WorkExpereinceLogs
                    key={project}
                    className={aboutWorkExpereinceLogs}
                  >
                    <WorkExpereinceLogs.Project
                      className={aboutWorkExpereinceLogProject}
                      text={project}
                    />
                    <WorkExpereinceLogs.Period text={projectPeriod} />
                    <WorkExpereinceLogs.Tags
                      className={aboutWorkExpereinceLogTags}
                    >
                      {tags.map((tag) => (
                        <WorkExpereinceLogs.Tag key={tag} text={tag} />
                      ))}
                    </WorkExpereinceLogs.Tags>
                    <WorkExpereinceLogs.Descriptions
                      className={aboutWorkExpereinceDescriptions}
                    >
                      {descriptions.map((description) => (
                        <WorkExpereinceLogs.Description
                          key={description}
                          className={aboutWorkExpereinceDescription}
                          text={description}
                        />
                      ))}
                    </WorkExpereinceLogs.Descriptions>
                  </WorkExpereinceLogs>
                )
              )}
            </WorkExpereince>
          )
        )}
      </div>
    </>
  );
}

export { AboutWorkExpereinces };
