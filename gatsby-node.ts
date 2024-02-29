<<<<<<< HEAD
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
=======
import fs from "fs";
>>>>>>> ebf7538 (refactor: fsd 패턴에 맞춰 블로그 목록 리팩토링)
import path from "path";

import type {
  CreateNodeArgs,
  CreatePagesArgs,
  CreateWebpackConfigArgs,
} from "gatsby";

import { createFilePath } from "gatsby-source-filesystem";

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
// 페이징에 필요한 폴더 및 json 파일을 만든다.
function createJSON(pageData) {
  const dir = `${__dirname}/static/jsons`;

>>>>>>> ebf7538 (refactor: fsd 패턴에 맞춰 블로그 목록 리팩토링)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

<<<<<<< HEAD
>>>>>>> b564d85 (refactor: fsd 패턴에 맞춰 블로그 레이아웃 생성)
=======
>>>>>>> ebf7538 (refactor: fsd 패턴에 맞춰 블로그 목록 리팩토링)
=======
function createJSON(pageData) {
  const dir = `${__dirname}/static/jsons`;

  if (fs.existsSync(dir)) {
    fs.rmdirSync(dir);
  }

  fs.mkdirSync(dir);

>>>>>>> cc4cb6c (refactor: about 페이지 정리)
  const filePath = `${dir}/page${pageData.pageSuffix}.json`;
  const dataToSave = JSON.stringify(pageData.context);

  fs.writeFile(filePath, dataToSave, () => {});
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a7f252a (refactor: 블로그 게시글 상세 페이지 fsd 아키텍처에 맞춰 리팩토링)
=======
>>>>>>> ebf7538 (refactor: fsd 패턴에 맞춰 블로그 목록 리팩토링)
async function createPages({ graphql, actions }: CreatePagesArgs) {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allMdx(sort: { frontmatter: { date: DESC } }) {
          nodes {
            id
<<<<<<< HEAD
<<<<<<< HEAD
            excerpt
=======
>>>>>>> a7f252a (refactor: 블로그 게시글 상세 페이지 fsd 아키텍처에 맞춰 리팩토링)
=======
            excerpt
>>>>>>> ebf7538 (refactor: fsd 패턴에 맞춰 블로그 목록 리팩토링)
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM D, YYYY")
<<<<<<< HEAD
<<<<<<< HEAD
              publish
              tags
=======
>>>>>>> a7f252a (refactor: 블로그 게시글 상세 페이지 fsd 아키텍처에 맞춰 리팩토링)
=======
              publish
              tags
>>>>>>> ebf7538 (refactor: fsd 패턴에 맞춰 블로그 목록 리팩토링)
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

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
  const POSTS_PER_PAGE = 10;
  const posts = [];
>>>>>>> ebf7538 (refactor: fsd 패턴에 맞춰 블로그 목록 리팩토링)
  const { nodes } = result.data.allMdx;
  const numPages = Math.ceil(nodes.length / POSTS_PER_PAGE);

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
      component: path.resolve(
        `./src/app/templates/post-template/post-layout.ui.tsx`
      ),
      context: {
        id: node.id,
        slug: node.fields.slug,
        excerpt: node.excerpt,
        title: node.frontmatter.title,
        date: node.frontmatter.date,
      },
    });
  });

  console.log(posts);

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
>>>>>>> a7f252a (refactor: 블로그 게시글 상세 페이지 fsd 아키텍처에 맞춰 리팩토링)
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark` || node.internal.type === "Mdx") {
    const slug = createFilePath({ node, getNode, basePath: "posts" });

    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
export { createPages, onCreateNode };
>>>>>>> a7f252a (refactor: 블로그 게시글 상세 페이지 fsd 아키텍처에 맞춰 리팩토링)
=======
function onCreateWebpackConfig({ actions }: CreateWebpackConfigArgs) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/shared": path.resolve(__dirname, "src/shared/"),
        "@/entities": path.resolve(__dirname, "src/entities/"),
        "@/features": path.resolve(__dirname, "src/features/"),
        "@/widgets": path.resolve(__dirname, "src/widgets/"),
        "@/app": path.resolve(__dirname, "src/app/"),
      },
    },
  });
}

export { createPages, onCreateNode, onCreateWebpackConfig };
>>>>>>> cc4cb6c (refactor: about 페이지 정리)
