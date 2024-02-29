<<<<<<< HEAD
import fs from 'fs';
import path from 'path';

import type {
  CreateNodeArgs,
  CreatePagesArgs,
  CreateWebpackConfigArgs,
} from 'gatsby';

import { createFilePath } from 'gatsby-source-filesystem';
=======
import path from "path";
import fs from "fs";

import { createFilePath } from "gatsby-source-filesystem";

<<<<<<< HEAD
import { PostLayout } from "./src/widgets/post-layout";
>>>>>>> b564d85 (refactor: fsd 패턴에 맞춰 블로그 레이아웃 생성)

function createJSON(pageData) {
  const dir = `${__dirname}/static/jsons`;

<<<<<<< HEAD
  if (fs.existsSync(dir)) {
    fs.rmdirSync(dir);
  }

  fs.mkdirSync(dir);

=======
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

>>>>>>> b564d85 (refactor: fsd 패턴에 맞춰 블로그 레이아웃 생성)
  const filePath = `${dir}/page${pageData.pageSuffix}.json`;
  const dataToSave = JSON.stringify(pageData.context);

  fs.writeFile(filePath, dataToSave, () => {});
}

<<<<<<< HEAD
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
=======
async function createPages({ graphql, actions, reporter }) {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          excerpt(pruneLength: 200)
          fields {
            slug
          }
          frontmatter {
            title
            date
            tags
            publish
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error loading MDX result", result.errors);
  }

  // Create blog post pages.
  const posts = result.data.allMdx.nodes;
  const pages = [];

  // you'll call `createPage` for each result
  posts.forEach((node) => {
    if (node.frontmatter.publish) {
      pages.push({
>>>>>>> b564d85 (refactor: fsd 패턴에 맞춰 블로그 레이아웃 생성)
        id: node.id,
        slug: node.fields.slug,
        excerpt: node.excerpt,
        title: node.frontmatter.title,
        date: node.frontmatter.date,
      });
    }

    createPage({
      path: node.fields.slug,
<<<<<<< HEAD
      component: path.resolve(
        `./src/app/templates/post-template/post-layout.ui.tsx`
      ),
      context: {
        id: node.id,
        slug: node.fields.slug,
        excerpt: node.excerpt,
        title: node.frontmatter.title,
        date: node.frontmatter.date,
=======
      component: PostLayout,
      context: {
        id: node.id,
        slug: node.fields.slug,
>>>>>>> b564d85 (refactor: fsd 패턴에 맞춰 블로그 레이아웃 생성)
      },
    });
  });

<<<<<<< HEAD
  const POSTS_PER_PAGE = 10;
  const numPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  for (let i = 0; i < numPages; i++) {
    const skip = i * POSTS_PER_PAGE;
    const pagePosts = posts.filter((_, postIndex) => {
      return postIndex >= skip && postIndex < skip + 10;
=======
  const postsPerPage = 10;
  const numPages = Math.ceil(edges.length / postsPerPage);

  for (let i = 0; i < numPages; i++) {
    const skip = i * postsPerPage;
    const pagePosts = posts.filter((_, j) => {
      return j >= skip && j < skip + 10;
>>>>>>> b564d85 (refactor: fsd 패턴에 맞춰 블로그 레이아웃 생성)
    });

    createJSON({
      pageSuffix: `${i + 1}`,
      context: {
<<<<<<< HEAD
        limit: POSTS_PER_PAGE,
=======
        limit: postsPerPage,
>>>>>>> b564d85 (refactor: fsd 패턴에 맞춰 블로그 레이아웃 생성)
        skip,
        numPages,
        currentPage: i + 1,
        posts: pagePosts,
      },
    });
  }
}

<<<<<<< HEAD
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

function onCreateWebpackConfig({ actions }: CreateWebpackConfigArgs) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@/shared': path.resolve(__dirname, 'src/shared/'),
        '@/entities': path.resolve(__dirname, 'src/entities/'),
        '@/features': path.resolve(__dirname, 'src/features/'),
        '@/widgets': path.resolve(__dirname, 'src/widgets/'),
        '@/app': path.resolve(__dirname, 'src/app/'),
      },
    },
  });
}

export { createPages, onCreateNode, onCreateWebpackConfig };
=======
=======
>>>>>>> 0bd1ab0 (feat: react-query 설정)
function onCreateNode({ node, getNode, actions }) {
  const { createNodeField } = actions;

  if (node.internal.mediaType === "text/mdx") {
    const slug = createFilePath({ node, getNode, basePath: "posts" });

    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
}

<<<<<<< HEAD
export { createPages, onCreateNode };

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.module\.css$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: true,
              },
            },
          ],
        },
      ],
    },
  });
};
>>>>>>> b564d85 (refactor: fsd 패턴에 맞춰 블로그 레이아웃 생성)
=======
export { onCreateNode };
>>>>>>> 0bd1ab0 (feat: react-query 설정)
