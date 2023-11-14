import { css } from '@emotion/react';

import Tags from '../commons/components/Tags';
import NoLayoutTemplate from '../commons/templates/NoLayoutTemplate';

function About() {
  return (
    <NoLayoutTemplate>
      <div css={cssProps.root}>
        <h1 css={cssProps.title}>
          안녕하세요
          <br />웹 프론트엔드 개발자 <strong>박유경</strong> 입니다!
        </h1>
        <p css={cssProps.introduce}>
          웹 프론트엔드 개발자답게 UI/UX에 관심이 많습니다.
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
        <h2 css={cssProps.subTitle}>Work Experience</h2>
        <div css={cssProps.workExperience}>
          <h3 css={cssProps.companyName}>넷마블F&C</h3>
          <table css={cssProps.workHistory}>
            <tr>
              <th>period</th>
              <td>2023.05 ~ 재직 중</td>
            </tr>
            <tr>
              <th>position</th>
              <td>
                <span>R&D실</span><span>&nbsp;서버팀&nbsp;</span><span>FE파트</span>
                <span css={cssProps.slash}>/</span>
                <span>Front-End Developer</span>
              </td>
            </tr>
          </table>
          <div css={cssProps.workExperienceDetails}>
            <h4 css={cssProps.workExperienceDetail}>
              React Native를 사용하여 채팅앱 프로토타입 개발
            </h4>
            <span css={cssProps.workExperienceDetailPeriod}>
              2023.06 ~ 2023.11
            </span>
            <Tags css={cssProps.workExperienceTackStacks} tags={['TypeScript', 'React Native', 'Redux', 'Protobuf']} />
            <ul css={cssProps.workExperienceDetailDescription}>
              <li>WebSocket과 Protobuf를 사용하여 채팅 기능 개발</li>
              <li>WebRTC를 사용하여 음성채팅, 화상채팅 기능 구현</li>
              <li>Flutter, React Native 비교 R&D 진행</li>
            </ul>
          </div>
          <div css={cssProps.workExperienceDetails}>
            <h4 css={cssProps.workExperienceDetail}>
              사내 Plan Management System 웹 애플리케이션 개발
            </h4>
            <span css={cssProps.workExperienceDetailPeriod}>
              2023.05 ~ 2023.06
            </span>
            <Tags css={cssProps.workExperienceTackStacks} tags={['TypeScript', 'React', 'Recoil', 'styled-components']} />
            <ul css={cssProps.workExperienceDetailDescription}>
              <li>
                수기로 지출 품의서 및 지출 결의서를 작성하는 재무팀을 위해 지출
                결의서 작성 및 등록 페이지 개발
              </li>
              <li>FE 파트 공통 Eslint Rule 및 Prettier Rule 적용</li>
            </ul>
          </div>
        </div>
        <div css={cssProps.workExperience}>
          <h3 css={cssProps.companyName}>
            메타버스월드 <span>(넷마블F&C 자회사)</span>
          </h3>
          <table css={cssProps.workHistory}>
            <tr>
              <th>period</th>
              <td>2022.03 ~ 2023.05</td>
            </tr>
            <tr>
              <th>position</th>
              <td>
                <span>웹 개발팀 FE파트</span>
                <span css={cssProps.slash}>/</span>
                <span>파트장</span>
              </td>
            </tr>
          </table>
          <div css={cssProps.workExperienceDetails}>
            <h4 css={cssProps.workExperienceDetail}>
              블록체인 서비스 Fncy 웹, 런처 내 웹뷰 신규 카테고리 개발 및
              유지보수
            </h4>
            <span css={cssProps.workExperienceDetailPeriod}>
              2022.03 ~ 2023.04
            </span>
            <Tags css={cssProps.workExperienceTackStacks} tags={['TypeScript', 'Next.js', 'Recoil', 'emotion', 'Turborepo']} />
            <ul css={cssProps.workExperienceDetailDescription}>
              <li>
                코인 스테이킹, 브릿지, NFT 에어드롭 및 구매, 판매를 제공하는
                서비스
              </li>
              <li>
                Single Pool 및 Event Pool 스테이킹 서비스, NFT 상품 상세, 이벤트 페이지를  반응형 웹 및 런처 내 웹뷰 페이지로 개발
              </li>
              <li>web3.js를 사용하여 스마트 컨트랙트 연동</li>
              <li>
                모노레포를 사용하여 웹서비스 및 웹뷰에서 공통 UI 컴포넌트, 공통
                비즈니스 로직 개발
              </li>              
              <li>버그 수정 및 피드백 반영</li>
            </ul>
          </div>
          <div css={cssProps.workExperienceDetails}>
            <h4 css={cssProps.workExperienceDetail}>
              모바일 게임 내 게시판 개발
            </h4>
            <span css={cssProps.workExperienceDetailPeriod}>
              2023.04 ~ 2023.04
            </span>
            <Tags css={cssProps.workExperienceTackStacks} tags={['TypeScript', 'React', 'emotion', 'Turborepo']} />
            <ul css={cssProps.workExperienceDetailDescription}>
              <li>모바일 게임 공지사항, 패치내역, 이벤트 게시판을 게임 앱 내 웹뷰 페이지로 개발</li>
              <li>
                여러 모바일 게임에 간단하게 이식할 수 있도록 모노레포를 사용하여
                공통 UI, 공통 비즈니스 로직 개발
              </li>
              <li>AWS S3, CloudFront를 사용하여 정적 웹사이트 호스팅</li>
            </ul>
          </div>
        </div>
        <div css={cssProps.workExperience}>
          <h3 css={cssProps.companyName}>번개장터</h3>
          <table css={cssProps.workHistory}>
            <tr>
              <th>period</th>
              <td>2019.05 ~ 2022.03</td>
            </tr>
            <tr>
              <th>position</th>
              <td>
                <span>커스터머랩</span>
                <span css={cssProps.slash}>/</span>
                <span>Front-End Developer</span>
              </td>
            </tr>
          </table>
          <div css={cssProps.workExperienceDetails}>
            <h4 css={cssProps.workExperienceDetail}>
              번개장터 웹서비스 기존 기능 개편, 신규 기능 추가, 유지보수
            </h4>
            <span css={cssProps.workExperienceDetailPeriod}>
              2019.05 ~ 2022.03
            </span>
            <Tags css={cssProps.workExperienceTackStacks} tags={['TypeScript', 'React', 'Redux', 'styled-components']} />
            <ul css={cssProps.workExperienceDetailDescription}>
              <li>중고거래 서비스 번개장터 PC웹, 모바일웹 담당</li>
              <li>모바일웹 판매등록 페이지 리팩토링</li>
              <li>모바일웹 관심상품 페이지 개발</li>
              <li>
                PC웹, 모바일웹 로그인 페이지 및 인증 비즈니스 로직 리팩토링
              </li>
              <li>버그 수정 및 피드백 반영</li>
            </ul>
          </div>
          <div css={cssProps.workExperienceDetails}>
            <h4 css={cssProps.workExperienceDetail}>
              내폰 시세조회 및 내폰 판매 서비스 개발 및 유지보수
            </h4>
            <span css={cssProps.workExperienceDetailPeriod}>
              2020.04 ~ 2022.03
            </span>
            <Tags css={cssProps.workExperienceTackStacks} tags={['TypeScript', 'React', 'styled-components']} />
            <ul css={cssProps.workExperienceDetailDescription}>
              <li>중고폰 시세 조회 판매 서비스</li>
              <li>
                서비스 주요 페이지 및 기능들을 모바일 웹, 네이티브 내 웹뷰로
                보여지는 페이지로 개발
              </li>
              <li>
                디자인팀에서 구축한 디자인 시스템 참고하여 공통 UI 컴포넌트 작성
              </li>
            </ul>
          </div>
          <div css={cssProps.workExperienceDetails}>
            <h4 css={cssProps.workExperienceDetail}>
              이벤트 및 프로모션 페이지 개발
            </h4>
            <span css={cssProps.workExperienceDetailPeriod}>
              2020.11 ~ 2022.03
            </span>
            <Tags css={cssProps.workExperienceTackStacks} tags={['TypeScript', 'React', 'Redux', 'styled-components']} />            
            <ul css={cssProps.workExperienceDetailDescription}>
              <li>번개장터 이벤트 및 프로모션을 반응형 웹, 네이티브 앱 내 웹뷰 페이지로 개발</li>
              <li>
                마케팅팀이 엑셀 시트에 이벤트 데이터를 입력하면 자동으로 해당 정보를 반영한 이벤트 페이지가 생성될 수 있도록 전용 컴포넌트 및 페이지 개발
              </li>
            </ul>
          </div>
          <div css={cssProps.workExperienceDetails}>
            <h4 css={cssProps.workExperienceDetail}>
              포장택배 서비스 개발 및 유지보수
            </h4>
            <span css={cssProps.workExperienceDetailPeriod}>
              2021.11 ~ 2021.12
            </span>
            <Tags css={cssProps.workExperienceTackStacks} tags={['TypeScript', 'React', 'Mobx', 'styled-components']} />
            <ul css={cssProps.workExperienceDetailDescription}>
              <li>
                문 앞에서 판매자의 물품을 픽업해 포장 및 배송을 해주는 서비스
              </li>
              <li>택배 신청 페이지, 배송 현황 페이지를 네이티브 앱 내 웹뷰 페이지로 개발</li>
            </ul>
          </div>
          <div css={cssProps.workExperienceDetails}>
            <h4 css={cssProps.workExperienceDetail}>
              중고폰 보험 가입 서비스 개발
            </h4>
            <span css={cssProps.workExperienceDetailPeriod}>
              2019.10 ~ 2019.11
            </span>
            <Tags css={cssProps.workExperienceTackStacks} tags={['TypeScript', 'React', 'Mobx', 'styled-components']} />
            <ul css={cssProps.workExperienceDetailDescription}>
              <li>중고폰 파손보험 가입 서비스</li>
              <li>서비스 주요 페이지 및 기능들을 네이티브 앱 내 웹뷰 페이지로 개발</li>
              <li>
                팀 내에서 사용되는 프로젝트 구조를 간추려 보일러 플레이트 작성 및 유지보수
              </li>
              <li>공통 Eslint Rule 및 Prettier Rule 적용</li>
            </ul>
          </div>
        </div>
        <div css={cssProps.workExperience}>
          <h3 css={cssProps.companyName}>커넥서스 컴퍼니</h3>
          <table css={cssProps.workHistory}>
            <tr>
              <th>period</th>
              <td>2017.08 ~ 2019.05</td>
            </tr>
            <tr>
              <th>position</th>
              <td>
                <span>개발팀</span>
                <span css={cssProps.slash}>/</span>
                <span>Front-End Developer</span>
              </td>
            </tr>
          </table>
          <div css={cssProps.workExperienceDetails}>
            <h4 css={cssProps.workExperienceDetail}>
              커머스 서비스 프롬 개발 및 유지보수
            </h4>
            <span css={cssProps.workExperienceDetailPeriod}>
              2018.04 ~ 2019.05
            </span>
            <Tags css={cssProps.workExperienceTackStacks} tags={['React', 'Redux', 'Redux-Form', 'jQuery', 'Node.js']} />
            <ul css={cssProps.workExperienceDetailDescription}>
              <li>
                소비자가 판매상품을 발굴하고 판매상품이 판매 목록에 등록되면
                다른 소비자들에게 추천 및 구매, 선물할 수 있는 서비스
              </li>
              <li>서비스 주요 페이지 및 기능들을 반응형 웹으로 개발</li>
              <li>프론트 개발 환경 구성 및 프로젝트 아키텍처 설계</li>
              <li>코드 스플리팅 적용</li>
              <li>Server Side Rendering 적용</li>

            </ul>
          </div>
          <div css={cssProps.workExperienceDetails}>
            <h4 css={cssProps.workExperienceDetail}>
              임플란트 시술 정보 제공 서비스 플랜티 개발
            </h4>
            <span css={cssProps.workExperienceDetailPeriod}>
              2017.08 ~ 2018.03
            </span>
            <Tags css={cssProps.workExperienceTackStacks} tags={['React', 'Redux', 'Redux-Form', 'jQuery', 'Node.js']} />
            <ul css={cssProps.workExperienceDetailDescription}>
              <li>
                임플란트 시술 방법 및 과정을 등록하고 다른 사용자가 해당 정보를
                보며 임플란트 시술 정보를 학습할 수 있는 서비스
              </li>
              <li>
                임플란트 시술 상세 페이지, 마이 페이지를 반응형 웹으로 개발
              </li>
            </ul>
          </div>
        </div>
        <div css={cssProps.workExperience}>
          <h3 css={cssProps.companyName}>트래포트</h3>
          <table css={cssProps.workHistory}>
            <tr>
              <th>period</th>
              <td>2016.07 ~ 2017.08</td>
            </tr>
            <tr>
              <th>position</th>
              <td>
                <span>개발팀</span>
                <span css={cssProps.slash}>/</span>
                <span>Front-End Developer</span>
              </td>
            </tr>
          </table>
          <div css={cssProps.workExperienceDetails}>
            <h4 css={cssProps.workExperienceDetail}>
              메타부킹 플랫폼 트래블하우 모바일웹, PC웹, 앱 내 웹뷰 신규 기능
              개발 및 유지보수
            </h4>
            <span css={cssProps.workExperienceDetailPeriod}>
              2016.07 ~ 2017.08
            </span>
            <Tags css={cssProps.workExperienceTackStacks} tags={['React', 'Reflux', 'jQuery', 'Node.js']} />
            <ul css={cssProps.workExperienceDetailDescription}>
              <li>
                호텔 가격 비교, 예약, 결제를 한번에 제공하는 메타부킹 서비스
              </li>
              <li>
                PC웹, 모바일웹, 앱 내 웹뷰 페이지로 출력되는 호텔 카테고리
                영역을 담당하여 신규 기능 개발 및 유지보수
              </li>
            </ul>
          </div>
          <div css={cssProps.workExperienceDetails}>
            <h4 css={cssProps.workExperienceDetail}>
              메타부킹 플랫폼 트래블하우 운영 어드민 신규 기능 개발 및 유지보수
            </h4>
            <span css={cssProps.workExperienceDetailPeriod}>
              2016.07 ~ 2017.08
            </span>
            <Tags css={cssProps.workExperienceTackStacks} tags={['React', 'Reflux', 'jQuery', 'Node.js']} />
            <ul css={cssProps.workExperienceDetailDescription}>
              <li>협력사와 내부직원에게 제공하는 운영 어드민</li>
              <li>호텔 카테고리 신규 기능 개발 및 유지보수</li>
              <li>여행 일정표, 여행지 스팟 관리 기능 개발 및 유지보수</li>
            </ul>
          </div>
        </div>
      </div>
    </NoLayoutTemplate>
  );
}

const cssProps = {
  root: css({
    width: '100%',
    maxWidth: 662,
    margin: '0 auto',
    padding: '76px 16px',
  }),
  title: css({
    marginBottom: 40,
    fontSize: 32,
  }),
  introduce: css({
    marginBottom: 100,
    fontSize: 17,
    lineHeight: '1.5',
  }),
  subTitle: css({
    marginBottom: 55,
    fontSize: 30,
  }),
  workExperience: css({
    marginBottom: 90,
  }),
  companyName: css({
    position: 'relative',
    marginBottom: 24,
    paddingLeft: 16,
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 1.4,

    ['&:before']: {
      position: 'absolute',
      width: 6,
      height: '100%',
      backgroundColor: 'var(--primary-color)',
      top: 0,
      left: 0,
      bottom: 0,
      content: '""',
    },
    ['span']: {
      display: 'inline-block',
      fontSize: 16,
    },
  }),
  workHistory: css({
    marginBottom: 45,

    'th, td': {
      padding: '12px 8px',
      borderTop: '1px solid hsla(var(--palette-gray-20), 100%)',

      ['&:last-of-type']: {
        borderBottom: '1px solid hsla(var(--palette-gray-20), 100%)',
      },
    },
    th: {
      width: 100,
      textAlign: 'right',
      fontWeight: 600,
    },

    'td span': {
      display: 'inline-block',
      lineHeight: 1.25
    },
  }),
  slash: {
    marginLeft: 8,
    marginRight: 8,
  },
  workExperienceDetails: css({
    paddingLeft: 30,

    ['&:not(:last-of-type)']: {
      marginBottom: 60,
    },
  }),
  workExperienceDetail: css({
    marginBottom: 8,
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 1.5,
  }),
  workExperienceDetailPeriod: css({
    color: 'hsla(var(--palette-gray-100), 80%)',
    fontSize: 14,
  }),
  workExperienceTackStacks: css({
    marginTop: 12,
    marginBottom: 30,
  }),
  workExperienceDetailDescription: css({
    marginLeft: 14,
    marginTop: 15,
    marginBottom: 6,
    listStylePosition: 'outside',
    listStyleType: 'disc',

    li: {
      marginBottom: 10,
      lineHeight: 1.5,
    },
  }),
};

export default About;
