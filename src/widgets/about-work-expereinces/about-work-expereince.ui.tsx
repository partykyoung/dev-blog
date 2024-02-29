import { WorkExpereinceCompany } from "./components/work-expereince-company";
import { WorkExpereinceHistory } from "./components/work-expereince-history";
import { WorkExpereinceLogs } from "./components/work-expereince-logs";

import { WORK_EXPEREINCES } from "./about-work-expereince.const";

import {
  aboutWorkExpereince,
  aboutWorkExpereincesBody,
  aboutWorkExpereincesTitle,
} from "./about-work-expereince.module.css";

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
            <div key={company} className={aboutWorkExpereince}>
              <WorkExpereinceCompany
                description={companyDescription}
                company={company}
              />
              <WorkExpereinceHistory
                period={period}
                team={team}
                teamPosition={teamPosition}
              />
              <WorkExpereinceLogs logs={logs} />
            </div>
          )
        )}
      </div>
    </>
  );
}

export { AboutWorkExpereinces };
