import type { HeadFC, PageProps } from "gatsby";

import { DefaultLayout } from "../widgets/default-layout";

import { Posts } from "../entities/posts";

const IndexPage: React.FC<PageProps> = () => {
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
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
