import type { HeadFC, PageProps } from 'gatsby';

import { DefaultLayout } from '../widgets/default-layout';

import { HomePosts } from "../widgets/home-posts";
import { Container } from "../shared/uis/container";
import { Button } from "../shared/uis/button";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <DefaultLayout>
      <Container>
        <HomePosts />
        <Button variant="fill" color="primary">
          그래
        </Button>
        <Button variant="outline" color="primary">
          사랑은
        </Button>
        <Button>돌아오는거야</Button>
      </Container>
    </DefaultLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
