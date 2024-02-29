import type { HeadFC, PageProps } from "gatsby";
import { MDXProvider } from "@mdx-js/react";

import { Container } from "../../shared/uis/container";
import { DefaultLayout } from "../../widgets/default-layout";

import "./post-layout.query";

function PostLayout({ data, children }: PageProps) {
  <DefaultLayout>
    <Container>
      <h1>{data.mdx.frontmatter.title}</h1>
      <span></span>
      <MDXProvider>{children}</MDXProvider>
    </Container>
  </DefaultLayout>;
}

export { PostLayout };
