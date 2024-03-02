import { graphql, type PageProps } from "gatsby";
import { MDXProvider } from "@mdx-js/react";

import { Container } from "@/shared/uis/container";
import { DefaultLayout } from "@/widgets/default-layout";

import { PostLayoutContent } from "./components/post-layout-content";
import { PostLayoutDate } from "./components/post-layout-date";
import { PostLayoutTags } from "./components/post-layout-tags";
import { PostLayoutTitle } from "./components/post-layout-title";

import { postLayoutContainer, postLayoutTitle } from "./post-layout.module.css";

function PostLayout({ data, children }: PageProps<any>) {
  const { date, tags, title } = data?.mdx?.frontmatter ?? {};

  console.log(data, children);

  return (
    <DefaultLayout>
      <Container className={postLayoutContainer}>
        <PostLayoutTitle className={postLayoutTitle} title={title} />
        <PostLayoutDate date={date} />
        <PostLayoutTags tags={tags} />
        <PostLayoutContent>
          <MDXProvider>{children}</MDXProvider>
        </PostLayoutContent>
      </Container>
    </DefaultLayout>
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        tags
      }
    }
  }
`;

export default PostLayout;
