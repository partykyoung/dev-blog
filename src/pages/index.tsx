import type { HeadFC, PageProps } from "gatsby";

import { DefaultLayout } from "../widgets/default-layout";

const IndexPage: React.FC<PageProps> = () => {
  return <DefaultLayout>블로그에용</DefaultLayout>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
