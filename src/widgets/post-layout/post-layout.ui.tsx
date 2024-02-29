import { graphql, type PageProps } from "gatsby";
import { Container } from "../../shared/uis/container";
import { DefaultLayout } from "../default-layout";

import { Tags } from "../../entities/tags";
import { PostLayoutDate } from "./components/post-layout-date";
import { PostLayoutTitle } from "./components/post-layout-title";

import {
  postLayoutContainer,
  postLayoutTags,
  postLayoutTitle,
} from "./post-layout.module.css";
import { PostLayoutContent } from "./components/post-layout-content";

function PostLayout({ data, children }: PageProps<any>) {
  const { date, tags, title } = data?.mdx?.frontmatter ?? {};

  return (
    <DefaultLayout>
      <Container className={postLayoutContainer}>
        <PostLayoutTitle className={postLayoutTitle} title={title} />
        <PostLayoutDate date={date} />
        <Tags
          className={postLayoutTags}
          tags={tags.map((tag) => ({ tag, link: `/tags/${tag}` }))}
        />
        <PostLayoutContent>{children}</PostLayoutContent>
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
