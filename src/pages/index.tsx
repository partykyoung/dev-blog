import type { HeadFC, PageProps } from 'gatsby';

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
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
