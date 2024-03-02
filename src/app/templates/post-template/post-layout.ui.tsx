import { graphql, type PageProps } from "gatsby";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { MDXProvider } from "@mdx-js/react";
>>>>>>> 08d1838 (fix: 버그 수정)

import { Container } from "@/shared/uis/container";
import { DefaultLayout } from "@/widgets/default-layout";

import { PostLayoutContent } from "./components/post-layout-content";
import { PostLayoutDate } from "./components/post-layout-date";
import { PostLayoutTags } from "./components/post-layout-tags";
import { PostLayoutTitle } from "./components/post-layout-title";

import { postLayoutContainer, postLayoutTitle } from "./post-layout.module.css";
=======
import { Container } from "../../../shared/uis/container";
import { DefaultLayout } from "../../../widgets/default-layout";
=======
>>>>>>> 011c246 (imp: 포스트 목록 고도화)

import { Container } from "@/shared/uis/container";
import { DefaultLayout } from "@/widgets/default-layout";

import { PostLayoutContent } from "./components/post-layout-content";
import { PostLayoutDate } from "./components/post-layout-date";
import { PostLayoutTitle } from "./components/post-layout-title";

<<<<<<< HEAD
import {
  postLayoutContainer,
  postLayoutTags,
  postLayoutTitle,
} from "./post-layout.module.css";
import { PostLayoutContent } from "./components/post-layout-content";
>>>>>>> ebf7538 (refactor: fsd 패턴에 맞춰 블로그 목록 리팩토링)
=======
import { postLayoutContainer, postLayoutTitle } from "./post-layout.module.css";
>>>>>>> 011c246 (imp: 포스트 목록 고도화)

function PostLayout({ data, children }: PageProps<any>) {
  const { date, tags, title } = data?.mdx?.frontmatter ?? {};

  console.log(data, children);

  return (
    <DefaultLayout>
      <Container className={postLayoutContainer}>
        <PostLayoutTitle className={postLayoutTitle} title={title} />
        <PostLayoutDate date={date} />
<<<<<<< HEAD
<<<<<<< HEAD
        <PostLayoutTags tags={tags} />
<<<<<<< HEAD
=======
        <Tags
          className={postLayoutTags}
          tags={tags?.map((tag) => ({ tag, link: `/tags/${tag}` }))}
        />
>>>>>>> ebf7538 (refactor: fsd 패턴에 맞춰 블로그 목록 리팩토링)
=======
        <PostLayoutTags tags={tags} />
>>>>>>> 011c246 (imp: 포스트 목록 고도화)
        <PostLayoutContent>{children}</PostLayoutContent>
=======
        <PostLayoutContent>
          <MDXProvider>{children}</MDXProvider>
        </PostLayoutContent>
>>>>>>> 08d1838 (fix: 버그 수정)
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
