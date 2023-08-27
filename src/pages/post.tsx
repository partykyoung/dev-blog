import React from 'react';
import { css } from '@emotion/react';

import type { HeadFC, PageProps } from 'gatsby';

import LayoutTemplate from '../templates/LayoutTemplate';
import { mqMin } from '../styles/mediaQuery';

const styles = {
  postContainer: css({
    width: '100%',
    paddingTop: 76,
    paddingRight: 20,
    paddigBottom: 76,
    paddingLeft: 20,

    [mqMin('sm')]: {
      paddingLeft: 36,
      paddingRight: 36
    },

    [mqMin('lg')]: {
      width: 768,
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: 16,
      paddingRight: 16

    },

  }),
  postTitle: {
    marginBottom: 38,
    fontFamily: 'Noto Sans KR',
    fontSize: 38,
    fontWeight: 800,
    lineHeight: 1.5
  },
  postDate: {
    marginBottom: 8,
    color: 'hsla(var(--palette-gray-60), 100%)',
    fontSize: 14,
  },
  postTags: {
    display: 'flex',
    marginBottom: 62,
    gap: 8,
    flexWrap: 'wrap',
  },
  postTag: {
    backgroundColor: 'hsla(var(--palette-blue-10), 100%)',
    padding: '4px 8px',
    borderRadius: 4,
    color: 'hsla(var(--palette-gray-80), 100%)',
    fontSize: 14,
  },
  postContent: {
    h2: {
      marginTop: 38,
      marginBottom: 12,
      fontSize: 32,
      fontWeight: 700,
      lineHeight: 1.5
    },
    h3: {
      marginTop: 28,
      marginBottom: 16,
      fontSize: 28,
      fontWeight: 700,
      lineHeight: 1.5
    },
    h4: {
      marginTop: 28,
      marginBottom: 16,
      fontSize: 24,
      fontWeight: 700,
      lineHeight: 1.5
    },
    h5: {
      marginTop: 28,
      marginBottom: 14,
      fontSize: 22,
      fontWeight: 700,
      lineHeight: 1.5
    },
    h6: {
      marginTop: 28,
      marginBottom: 14,
      fontSize: 20,
      fontWeight: 600,
      lineHeight: 1.5
    },
    p: {
      fontSize: 18,
      lineHeight: 1.8,
      fontWeight: 400,
      wordBreak: 'keep-all',
      overflowWrap: 'break-word',
      ['&:not(last-of-type)']: {
        marginBottom: 36
      }
    }
  },
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <LayoutTemplate>
      <div css={styles.postContainer}>
        <h1 css={styles.postTitle}>글제목</h1>
        <p css={styles.postDate}>2023.08.26</p>
        <ul css={styles.postTags}>
          <li css={styles.postTag}>
            <a>태그 1</a>
          </li>
          <li css={styles.postTag}>
            <a>태그 2</a>
          </li>
          <li css={styles.postTag}>
            <a>태그 3</a>
          </li>
          <li css={styles.postTag}>
            <a>혹시모르니까아주기다란태그</a>
          </li>

        </ul>
        <div css={styles.postContent}>
          <h2>제목2</h2>
          <h3>제목3</h3>
          <h4>제목4</h4>
          <h5>제목5</h5>
          <h6>제목6 여기까지 쓸까...?</h6>
          <p>객관적으로 온전한 삶을 사수하는 것이 과연 가능한가 살펴봤어요. 삶에는 다음의 것들이 포함됩니다.</p>
          <ul>
            <li>일을 위한 준비 (출근 준비) - 약 30분</li>
            <li>일을 하러 가는 시간 (출퇴근 시간) - 약 1시간</li>
            <li>식사 - 약 2시간</li>
            <li>…</li>
          </ul>
          <p>일을 위한 것들이죠. 이미 4시간이나 사라졌어요. 아마 우리가 맞추고자 했던 ‘균형’이 이런 모습은 아니었을 것 같아요. 여기에 일정이 다가오는 업무로 인한 야근, 자기 개발을 위한 시간, 간혹 누리는 달콤한 늦잠, 체력을 위한 운동 까지 포함한다면 어떨까요? 우리가 지키고자 했던 ‘삶’을 위한 시간은 더 적어집니다.</p>
          <p>삶을 위한 시간이 점점 적어지면서 불만이 쌓여갑니다. 그러면서 수면을 포기하게 되는 현상이 발생합니다. 수면을 포기하니 삶의 질이 낮아지고 일에서의 퍼포먼스가 낮아집니다. 이로 인한 스트레스는 쌓이고 자야할 시간엔 이 스트레스를 해소하기 위한 무언가의 활동을 합니다. 다시 수면의 시간은 짧아지고 악순환이 시작됩니다.</p>
          <p>서로 명확히 분리하다보면 끊임없이 영역을 확보하기 위한 싸움을 하게 됩니다.</p>
          <h2 id="생각보다-더-중요한-수면">생각보다 더 중요한 수면</h2>
          <p>사람마다 다양한 이유가 있겠지만 결국 행복을 추구하려다 보니 밸런스를 논하게 된 것이 아닐까? 싶어요. 그렇다면 밸런스가 아닌 다른 방법으로 행복을 추구할 수 있지 않을까? 접근해볼 수 있을 것 같아요</p>
          <p>일이 삶을 더 윤택하게 만들고 삶이 일을 더 잘할 수 있도록 한다면 우린 일과 삶에서 모두 행복할 수 있지 않을까요? 일과 삶이 서로를 등지고 있는게 아니라 서로 같은 곳을 바라보고 있다면?</p>
          <p>일터에서는 자신의 가치를 증명하고 성취감을 느끼며 일하는 이유를 찾을 수 있을 것 같아요. 팀에 기여를 하고 있다는 느낌을 받고 자기효능감을 느낄 수 있다면 행복할 것 같습니다.</p>
          <p>이렇게 일을 마치고 나면 몸은 조금 지칠지 몰라도 자존감이 올라오게 되고 일을 더 잘하기 위해 휴식을 취하게 됩니다. 마음이 편안해지는 가족과도 시간을 보내게 되고 체력을 기르기 위해 운동을 하거나 성장을 위한 자기 개발 시간을 갖기도 합니다.</p>
          <p>일이 삶을 위한 시간을 빼앗아 스트레스를 받지 않게 됩니다. 쉬면서 가치있는 일을 하지 않았다고, 시간 낭비했다고 생각하며 스트레스를 받지 않습니다. 일을 하면서 성취감을 느끼고 자신의 삶을 보내면서 일을 더 잘할 수 있게 됐습니다.</p>
          <p>쉬는 것도 잘 쉬는 것이 중요할 것 같아요. 일은 잘하려고 고민을 많이 하는데 잘 쉬려는 고민은 잘 안 하는 것 같아요.</p>
          <p>일과 마찬가지로 우선 시간을 확보하는 것이 중요했어요. 정해진만큼 일하고 정해진만큼 쉬는 것이 생각보다 어렵더라구요. 휴식을 보장하는 것만으로도 일의 효율이 올라간다고 해요.</p>
          <p>최대한 아무것도 하지 않아야 제대로 된 휴식이라고 착각하곤 합니다. 사실 우리는 아무것도 안하기 힘든 뇌 구조를 갖고 있어요. ‘코끼리를 생각하지마!’라는 말을 듣는 순간 우리 뇌는 코끼리를 생각합니다.</p>
          <p>머리 속에서는 일이 떠나지 않을테고 뭘 하고 있진 않지만 그렇다고 머리가 개운해지는 느낌을 받거나 푹 쉬었다는 느낌을 받지 못햐요. 어설프게 쉴 바에(도파민을 쫓아 Youtube 영상을 보고 있을지도 모릅니다.) 차라리 잠을 주무세요! (뒤에 잠 이야기를 짧게 할 예정)</p>
          <p>에너지를 채우는 휴식은 뇌를 ‘일(work)‘에서 벗어나도록 하는 것입니다. 무언가에 <strong>몰입</strong>할 수 있는 활동을 해보세요. 가장 대표적인 것이 운동입니다. 몸의 움직임에 집중하게 되면 놀랍게도 딴 생각할 틈이 없습니다. 뇌가 그렇게 생겨먹었다고 해요.</p>
          <p>또 우리는 운동 뿐만 아니라 새로운 것(저에겐 음악이나 공예와 같이 일과 관련없는 무언가)을 배울 때, 목적을 이루기 위해 집중할 때(승리를 위한 운동 경기) 몰입을 경험하곤 합니다. 이런 의미에서 새로운 취미를 배워보는 것도 매우 좋다고 생각합니다. 새로운 세계가 열리는 경험을 하게 될 것이라 생각해요.</p>
          <p>일 잘하는 법에 대한 글은 많은데 잘 쉬는 법에 대한 책이나 글은 적은 것 같아요. 좀 더 알아보고 싶다면 ’<a href="https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=274783864">이토록 멋진 휴식</a>‘이란 책도 추천해요.</p>
          <h2 id="생각보다-더-중요한-수면">생각보다 더 중요한 수면</h2>
          <h3>그럴까?</h3>
          <p>일과 삶을 이야기하면서 상대적으로 잠을 중요하게 생각하지 않는 경향이 있는 것 같아요. 일과 삶 만큼 많은 시간을 차지하는 데도 말이예요. 이 수면의 밀도를 높이고 개선하는 것만으로도 일과 삶에 많은 긍정적인 변화가 있을 것으로 확신해요.</p>
          <p>뇌는 우리가 자는 도중에도 쉬지 않고 일을 한다고 해요. 오늘 보고 배운 것들이 단기 기억 장치에 쌓여있었다면 자는 도중 이것들을 범주화하여 필요없는 것은 제거하고 필요한 것만 장기 기억 장소로 이관합니다.</p>
          <p>풀리지 않았던 문제는 무의식 속에 남습니다. 그리고 뇌는 이 무의식을 활용하여 자는 도중 생각지도 못했던 해결책을 만들어두곤 합니다. (샤워 디버깅과 같은 원리임)</p>
          <p>실제로 깨어있을 때 활성화되는 뇌의 영역과 자고 있을 때, 멍을 때릴 때 활성화되는 뇌의 영역이 다릅니다. 주로 후자의 경우 활성화되는 뇌의 영역에서 창의적인 문제 해결 방법이 나옵니다.</p>
          <h3>아닐까?</h3>
          <p>수면에 대한 글이 아니니 잠의 필요성에 대해 2가지 정도만 소개드렸어요. 그래도도 잠의 중요성에 대해 납득되지 않는다면, 또는 잠에 대해 더 궁금한게 있다면 ‘<a href="https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=184006846">매슈 워커 - 우리는 왜 잠을 자야 할까</a>’라는 근본 책을 추천해요. 잠을 중요하게 여겨질 것이라 생각합니다.</p>
          <p>야근에 대한 얘기를 안할 수가 없어요. 누구를 위한 야근일까요.</p>
          <p>글의 흐름으로 보아 야근을 지양하자는 이야기를 하겠죠? 좀 더 극단적으로 표현하자면,</p>
          <ol>
            <li>야근을 시키는 회사는 서서히 망해가는 회사이며</li>
            <li>야근자를 가만히 두는 회사는 팀원을 소모 후 교체 가능한 사람이라고 생각하는 회사일
              확률이 높다</li>
          </ol>
          <p>라는 우울한 이야기를 하려고 해요.</p>
          <p>이 글에서 ‘야근’이란 기본 근로 근무 시간(보통 8시간) 이상 근무하는 것을 말합니다. 보통 저녁시간 대에 이뤄지다보니 야근이라고 부르게 된 것이 아닐까 싶은데요, 이 글에선 일하는 시간과는 상관없이(물론 이것도 중요하긴 하지만) 초과 근무를 의미하며 주말 근무도 포함해서 이야기하려고 합니다.</p>
          <p>비포괄임금제로 야근을 하면 기본 수당에 비해 더 많이 줘야 해요. 그렇다면 수당을 더 주는 만큼 결과물도 그만큼 많을까?라는 고용주의 입장에서 생각을 해볼 수 있어요. 야근하는 사람의 급여만큼 생산성도 1.5배일까?를 생각해보면 당연히 그렇진 않아요. 근무해야 하는 8시간을 이미 근무한 상태에서 체력적으로 지친 상태에서 추가로 근무하는 것이기 때문입니다. 이것만 놓고 봤을 때, 회사 입장에서는 성능이 떨어지는 리소스를 더 비싸게 주고 사는 꼴이 됩니다.</p>
          <p>연장 근무는 자연스럽게 다음 근무에 영향을 주게 됩니다. 제대로 된 휴식, 수면을 취하지 못하면 100% 컨디션으로 근무하기 어렵습니다. 회사 입장에선 또 손해보는 장사가 됩니다.</p>
          <p>야근을 하면 생산성이 더 떨어지기 때문에 계획한 일을 다 하지 못할 가능성이 높아요. 이러면 주말에 근무하게 되는데, 이러면 또 추가 수당이 붙고 휴식은 휴식대로 못하고 악순환이 시작됩니다.</p>
          <p>야근을 많이 시킬 수록 회사가 망해가는 것은 데이터에 기반한 사실이라고 할 수 있습니다. 물론 한 두달 정도의 단기 기간만 봤을 때, 결과물이 많아질 수 있다고 생각해요. 하지만 장기적인 관점에선 절대 그렇지 않습니다.</p>
          <p>진정 팀을 위한다면 야근을 하지 않아야 한다고 생각합니다. 장기적으로 봐야하고 팀이 눈앞의 성과가 아닌 학습, 성장에 집중해야 하지 않을까요?</p>
        </div>
      </div>
    </LayoutTemplate >
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
