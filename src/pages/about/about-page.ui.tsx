import { Container } from "../../shared/uis/container";
import { BasicLayout } from "../../widgets/basic-layout";
import { AboutWorkExpereinces } from "../../widgets/about-work-experiences";

import {
  aboutContainer,
  aboutMe,
  aboutMeIntroduce,
} from "./about-page.module.css";

function AboutPage() {
  return (
    <BasicLayout>
      <Container className={aboutContainer}>
        <h1 className={aboutMe}>
          안녕하세요
          <br />웹 프론트엔드 개발자 <strong>박유경</strong> 입니다!
        </h1>
        <p className={aboutMeIntroduce}>
          웹 프론트엔드 개발자답게 UI/UX 및 컴포넌트 재사용성 극대화에 관심이
          많습니다.
          <br />
          <br />
          끊임없이 진화하는 기술 트렌드에 적극적으로 대응하며, 새로운 기술
          습득에 거부감이 없습니다.
          <br />
          <br />
          편안한 환경에 안주하기보다는 새로운 기술이나 해법을 적극적으로
          탐구하고 실험함으로써
          <br />더 나은 결과를 추구하며, 지식으로 흡수하고 습득하는 것에 힘쓰고
          있습니다.
        </p>
        <AboutWorkExpereinces />
      </Container>
    </BasicLayout>
  );
}

export default AboutPage;
