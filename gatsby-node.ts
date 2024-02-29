import path from 'path';

import type { CreateNodeArgs, CreatePagesArgs } from 'gatsby';

import { createFilePath } from 'gatsby-source-filesystem';

async function createPages({ graphql, actions }: CreatePagesArgs) {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allMdx(sort: { frontmatter: { date: DESC } }) {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM D, YYYY")
              title
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    `
  );

  const { nodes } = result.data.allMdx;

  nodes.forEach((node) => {
    createPage({
      path: node.fields.slug,
      component: `${path.resolve(
        `./src/widgets/post-layout/post-layout.ui.tsx`
      )}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { slug: node.fields.slug },
    });
  });
}

function onCreateNode({ node, getNode, actions }: CreateNodeArgs) {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark` || node.internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode, basePath: 'posts' });

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
}

export { createPages, onCreateNode };
