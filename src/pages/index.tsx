import type { HeadFC, PageProps } from 'gatsby';

import { DefaultLayout } from '@/widgets/default-layout';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <DefaultLayout>
      <Container>
        <HomePosts />
      </Container>
    </DefaultLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
