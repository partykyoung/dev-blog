import fs from 'fs';
import path from 'path';

import type { CreateNodeArgs, CreatePagesArgs } from 'gatsby';

import { createFilePath } from 'gatsby-source-filesystem';

// 페이징에 필요한 폴더 및 json 파일을 만든다.
function createJSON(pageData) {
  const dir = `${__dirname}/static/jsons`;

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  const filePath = `${dir}/page${pageData.pageSuffix}.json`;
  const dataToSave = JSON.stringify(pageData.context);

  fs.writeFile(filePath, dataToSave, () => {});
}

async function createPages({ graphql, actions }: CreatePagesArgs) {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allMdx(sort: { frontmatter: { date: DESC } }) {
          nodes {
            id
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM D, YYYY")
              publish
              tags
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

  const posts = [];
  const { nodes } = result.data.allMdx;

  nodes.forEach((node) => {
    if (node.frontmatter.publish) {
      posts.push({
        id: node.id,
        slug: node.fields.slug,
        excerpt: node.excerpt,
        title: node.frontmatter.title,
        date: node.frontmatter.date,
      });
    }

    createPage({
      path: node.fields.slug,
      component: `${path.resolve(
        `./src/app/templates/post-template/post-layout.ui.tsx`
      )}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
        slug: node.fields.slug,
        excerpt: node.excerpt,
        title: node.frontmatter.title,
        date: node.frontmatter.date,
      },
    });
  });

  const POSTS_PER_PAGE = 10;
  const numPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  for (let i = 0; i < numPages; i++) {
    const skip = i * POSTS_PER_PAGE;
    const pagePosts = posts.filter((_, postIndex) => {
      return postIndex >= skip && postIndex < skip + 10;
    });

    createJSON({
      pageSuffix: `${i + 1}`,
      context: {
        limit: POSTS_PER_PAGE,
        skip,
        numPages,
        currentPage: i + 1,
        posts: pagePosts,
      },
    });
  }
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
