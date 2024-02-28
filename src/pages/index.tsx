import type { HeadFC, PageProps } from 'gatsby';

<<<<<<< HEAD
<<<<<<< HEAD
import { DefaultLayout } from '@/widgets/default-layout';

import { HomePosts } from '@/widgets/home-posts';
import { Container } from '@/shared/uis/container';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <DefaultLayout>
      <Container>
        <HomePosts />
      </Container>
    </DefaultLayout>
=======
import { Header } from "../widgets/header";
import { Footer } from "../widgets/footer";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <Footer />
    </>
>>>>>>> 4704d73 (refactor: fsd 아키텍처 구조에 맞게 레이아웃 재작업)
  );
=======
import { DefaultLayout } from "../widgets/default-layout";

import { Posts } from "../entities/posts";

const IndexPage: React.FC<PageProps> = () => {
<<<<<<< HEAD
  return <DefaultLayout>블로그에용</DefaultLayout>;
>>>>>>> 7c4c06c (refactor: 공통 컴포넌트 fsd 아키텍처로 재작업)
=======
  return (
    <DefaultLayout>
      <Posts>
        <Posts.List>
          <Posts.ListItem
            excerpt="ㅎ규링ㄴ루ㅏㅣ눞,ㅡㅌㅇ푸ㅡ,ㄹㅌ"
            link="2"
            title="재취업 힘들어요"
          />
        </Posts.List>
        <Posts.Skeleton />
      </Posts>
    </DefaultLayout>
  );
>>>>>>> d8737b0 (refactor: fsd 아키텍쳐에 맞춰 posts 컴포넌트 리팩토링)
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
