import { css } from '@emotion/react';

import NoLayoutTemplate from '../templates/NoLayoutTemplate';

function About() {
  return (
    <NoLayoutTemplate>
      <div css={cssProps.root}>
        <h1 css={cssProps.title}>
          안녕하세요<br />
          웹 프론트엔드 개발자 <strong>박유경</strong> 입니다!
        </h1>
        <p css={cssProps.introduce}>
          웹 프론트엔드 개발자답게 UI/UX에 관심이 많습니다
          끊임없이 진화하는 기술 트렌드에 적극적으로 대응하며, 새로운 기술 습득에 거부감이 없습니다
          편안한 환경에 안주하기보다는 새로운 기술이나 해법을 적극적으로 탐구하고 실험함으로써 더 나은 결과를 추구하며,
          지식으로 흡수하고 습득하는 것에 힘쓰고 있습니다.
        </p>
        <h2 css={cssProps.subTitle}>Work Experience</h2>
        <h3 css={cssProps.companyName}>메타버스월드 ~ 넷마블에프엔씨</h3>
        <span css={cssProps.period}>2022.03 ~ 재직 중</span>
        <ul css={cssProps.description}>
          <li>
            React Native를 사용하여 채팅앱 프로토타입 개발
          </li>
          <li>
            블록체인 웹서비스 신규 카테고리 개발 및 유지보수
          </li>
        </ul>
        <h3 css={cssProps.companyName}>번개장터</h3>
        <span css={cssProps.period}>2019.05 ~ 2022.03</span>
        <ul css={cssProps.description}>
          <li>
            내폰 시세조회 및 내폰 판매 서비스 개발 및 유지보수
          </li>
          <li>
            포장택배 서비스 개발
          </li>
          <li>
            번개장터 웹서비스 기존 기능 개편, 신규 기능 추가, 유지보수
          </li>
          <li>
            중고폰 보험 가입 서비스 개발
          </li>
        </ul>
        <h3 css={cssProps.companyName}>커넥서스컴퍼니</h3>
        <span css={cssProps.period}>2017.08 ~ 2019.04</span>
        <ul css={cssProps.description}>
          <li>
            커머스 서비스 개발 및 유지보수
          </li>
          <li>임플란트 시술 정보 제공 웹서비스 개발 및 유지보수</li>
        </ul>
        <h3 css={cssProps.companyName}>트래포트</h3>
        <span css={cssProps.period}>2016.07 ~ 2017.08</span>
        <ul css={cssProps.description}>
          <li>매타부킹 플랫폼 백오피스 신규 서비스 카테고리 개발 및 유지보수</li>
          <li>매타부킹 플랫폼 웹앱, 백오피스 호텔 카테고리 신규 개발 및  유지보수</li>
        </ul>
      </div>
    </NoLayoutTemplate>
  );
}

const cssProps = {
  root: css({
    width: '100%',
    maxWidth: 662,
    margin: '0 auto',
    padding: '76px 16px'
  }),
  title: css({
    marginBottom: 24,
    fontSize: 32,
  }),
  introduce: css({
    margin: '26px 0 66px',
    fontSize: 18,
    lineHeight: '1.5'
  }),
  subTitle: css({
    marginBottom: 16,
    fontSize: 28
  }),
  companyName: css({
    fontSize: 18,
    marginBottom: 4,
    paddingLeft: 6,
    lineHeight: 1.4,
    borderLeft: '6px solid hsla(var(--palette-blue-100), 100%)',
    ["&:not(first-of-type)"]: {
      marginTop: 32
    },
  }),
  period: css({
    paddingLeft: 14,
    color: 'hsla(var(--palette-gray-100), 80%)',
    fontSize: 14,
  }),
  description: css({
    marginLeft: '24px',
    marginTop: '6px',
    marginBottom: '6px',
    listStylePosition: 'outside',
    listStyleType: 'disc',
    'li': {
      marginBottom: '4px',
      lineHeight: 1.5
    }
  })
};

export default About;