const WORK_EXPEREINCES = [
  {
    company: "넷마블F&C",
    logs: [
      {
        descriptions: [
          "WebSocket과 Protobuf를 사용하여 채팅 기능 개발",
          "WebRTC를 사용하여 음성채팅, 화상채팅 기능 구현",
          "Flutter, React Native 비교 R&D 진행",
        ],
        project: "React Native를 사용하여 채팅앱 프로토타입 개발",
        projectPeriod: "2023.06 ~ 2023.11",
        tags: ["TypeScript", "React Native", "Redux Toolkit", "Protobuf"],
      },
      {
        descriptions: [
          "수기로 지출 품의서 및 지출 결의서를 작성하는 재무팀을 위해 지출결의서 작성 및 등록 페이지 개발",
          "FE 파트 공통 Eslint Rule 및 Prettier Rule 적용",
        ],
        project: "사내 Plan Management System 웹 애플리케이션 개발",
        projectPeriod: "2023.05 ~ 2023.06",
        tags: ["TypeScript", "React", "Recoil", "Material UI", "Emotion"],
      },
    ],
    period: "2023.05 ~ 2023.12",
    team: "R&D실 서버팀 FE파트",
    teamPosition: "Front-End Developer",
  },
  {
    company: "메타버스월드",
    companyDescription: "넷마블F&C 자회사",
    logs: [
      {
        descriptions: [
          "코인 스테이킹, 브릿지, NFT 에어드롭 및 구매, 판매를 제공하는 서비스",
          "Single Pool 및 Event Pool 스테이킹 서비스, NFT 상품 상세, 이벤트 페이지를 반응형 웹 및 런처 내 웹뷰 페이지로 개발",
          "web3.js를 사용하여 스마트 컨트랙트 연동",
          "모노레포를 사용하여 웹서비스 및 웹뷰에서 공통 UI 컴포넌트, 공통 비즈니스 로직 개발",
          "버그 수정 및 피드백 반영",
        ],
        project:
          "블록체인 서비스 Fncy 웹, 런처 내 웹뷰 신규 카테고리 개발 및 유지보수",
        projectPeriod: "2022.03 ~ 2023.04",
        tags: ["TypeScript", "Next.js", "Recoil", "Emotion", "Turborepo"],
      },
      {
        descriptions: [
          "모바일 게임 공지사항, 패치내역, 이벤트 게시판을 게임 앱 내 웹뷰 페이지로 개발",
          "여러 모바일 게임에 간단하게 이식할 수 있도록 모노레포를 사용하여 공통 UI, 공통 비즈니스 로직 개발",
          "AWS S3, CloudFront를 사용하여 정적 웹사이트 호스팅",
        ],
        project: "모바일 게임 내 게시판 개발",
        projectPeriod: "2023.04 ~ 2023.04",
        tags: ["TypeScript", "React", "Emotion", "Turborepo"],
      },
    ],
    period: "2022.03 ~ 2023.05",
    team: "웹 개발팀 FE파트",
    teamPosition: "파트장",
  },
  {
    company: "번개장터",
    logs: [
      {
        descriptions: [
          "중고거래 서비스 번개장터 PC웹, 모바일웹 담당",
          "모바일웹 판매등록 페이지 리팩토링",
          "모바일웹 관심상품 페이지 개발",
          "PC웹, 모바일웹 로그인 페이지 및 인증 비즈니스 로직 리팩토링",
          "버그 수정 및 피드백 반영",
        ],
        project: "번개장터 웹서비스 기존 기능 개편, 신규 기능 추가, 유지보수",
        projectPeriod: "2019.05 ~ 2022.03",
        tags: ["TypeScript", "React", "Redux", "Styled Components"],
      },
      {
        descriptions: [
          "중고폰 시세 조회 판매 서비스",
          "서비스 주요 페이지 및 기능들을 모바일 웹, 네이티브 앱 내 웹뷰로 보여지는 페이지로 개발",
          "디자인팀에서 구축한 디자인 시스템 참고하여 공통 UI 컴포넌트 작성",
          "Lottie 애니메이션 적용 시 dynamic import, intersectionobserver를 사용하여 웹성능 최적화",
        ],
        project: "내폰 시세조회 및 내폰 판매 서비스 개발 및 유지보수",
        projectPeriod: "2020.04 ~ 2022.03",
        tags: ["TypeScript", "React", "Styled Components"],
      },
      {
        descriptions: [
          "번개장터 이벤트 및 프로모션을 반응형 웹, 네이티브 앱 내 웹뷰 페이지로 개발",
          "마케팅팀이 엑셀 시트에 이벤트 데이터를 입력하면 자동으로 해당 정보를 반영한 이벤트 페이지가 생성될 수 있도록 전용 컴포넌트 및 페이지 개발",
        ],
        project: "이벤트 및 프로모션 페이지 개발",
        projectPeriod: "2020.11 ~ 2022.03",
        tags: ["TypeScript", "React", "Redux", "Styled Components"],
      },
      {
        descriptions: [
          "문 앞에서 판매자의 물품을 픽업해 포장 및 배송을 해주는 서비스",
          "택배 신청 페이지, 배송 현황 페이지를 네이티브 앱 내 웹뷰 페이지로 개발",
        ],
        project: "포장택배 서비스 개발 및 유지보수",
        projectPeriod: "2021.11 ~ 2021.12",
        tags: ["TypeScript", "React", "Mobx", "Styled Components"],
      },
      {
        descriptions: [
          "중고폰 파손보험 가입 서비스",
          "서비스 주요 페이지 및 기능들을 네이티브 내 웹뷰 페이지로 개발",
          "팀 내에서 사용되는 프로젝트 구조를 간추려 보일러 플레이트 작성 및 유지보수",
          "공통 Eslint Rule 및 Prettier Rule 적용",
        ],
        project: "중고폰 보험 가입 서비스 개발",
        projectPeriod: "2019.10 ~ 2019.11",
        tags: ["TypeScript", "React", "Mobx", "Styled Components"],
      },
    ],
    period: "2019.05 ~ 2022.03",
    team: "커스터머랩",
    teamPosition: "Front-End Developer",
  },
  {
    company: "커넥서스컴퍼니",
    logs: [
      {
        descriptions: [
          "소비자가 판매상품을 발굴하고 판매상품이 판매 목록에 등록되면 다른 소비자들에게 추천 및 구매, 선물할 수 있는 서비스",
          "서비스 주요 페이지 및 기능들을 반응형 웹으로 개발",
          "프론트 개발 환경 구성 및 프로젝트 아키텍처 설계",
          "코드 스플리팅, 윈도잉 기법, 이미지 레이지 로딩 등을 사용하여 웹성능 최적화",
          "Node.js로 웹 애플리케이션 미들웨어를 작성하여 Server Side Rendering 적용",
        ],
        project: "커머스 서비스 프롬 개발 및 유지보수",
        projectPeriod: "2018.04 ~ 2019.05",
        tags: [
          "TypeScript",
          "React",
          "Redux",
          "Redux-Form",
          "Reactstrap",
          "jQuery",
          "Node.js",
        ],
      },
      {
        descriptions: [
          "임플란트 시술 방법 및 과정을 등록하고 다른 사용자가 해당 정보를 보며 임플란트 시술 정보를 학습할 수 있는 서비스",
          "임플란트 시술 상세 페이지, 마이 페이지를 반응형 웹으로 개발",
        ],
        project: "임플란트 시술 정보 제공 서비스 플랜티 개발",
        projectPeriod: "2017.08 ~ 2018.03",
        tags: [
          "TypeScript",
          "React",
          "Redux",
          "Redux-Form",
          "Bootstrap",
          "jQuery",
          "Node.js",
        ],
      },
    ],
    period: "2017.08 ~ 2019.05",
    team: "개발팀",
    teamPosition: "Front-End Developer",
  },
  {
    company: "트래포트",
    logs: [
      {
        descriptions: [
          "호텔 가격 비교, 예약, 결제를 한번에 제공하는 메타부킹 서비스",
          "PC웹, 모바일웹, 앱 내 웹뷰 페이지로 출력되는 호텔 카테고리 영역을 담당하여 신규 기능 개발 및 유지보수",
        ],
        project:
          "메타부킹 플랫폼 트래블하우 모바일웹, PC웹, 앱 내 웹뷰 페이지 신규 기능 개발 및 유지보수",
        projectPeriod: "2016.07 ~ 2017.08",
        tags: ["React", "Reflux", "Semantic UI", "jQuery", "Node.js"],
      },
      {
        descriptions: [
          "협력사와 내부직원에게 제공하는 운영 어드민",
          "호텔 카테고리 영역을 담당하여 신규 기능 개발 및 유지보수",
          "여행 일정표, 여행지 스팟 관리 기능 개발 및 유지보수",
        ],
        project:
          "메타부킹 플랫폼 트래블하우 운영 어드민 신규 기능 개발 및 유지보수",
        projectPeriod: "2016.07 ~ 2017.08",
        tags: ["React", "Reflux", "Semantic UI", "jQuery", "Node.js"],
      },
    ],
    period: "2016.07 ~ 2017.08",
    team: "기술연구소",
    teamPosition: "Front-End Developer",
  },
];

export { WORK_EXPEREINCES };
