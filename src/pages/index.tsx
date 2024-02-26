import type { HeadFC, PageProps } from "gatsby";

import { Header } from "../widgets/header";
import { Footer } from "../widgets/footer";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
