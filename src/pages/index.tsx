import type { HeadFC, PageProps } from "gatsby";

import { Header } from "../widgets/header";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
