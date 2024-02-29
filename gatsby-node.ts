import path from "path";
import fs from "fs";

import { createFilePath } from "gatsby-source-filesystem";

import { PostLayout } from "./src/widgets/post-layout";

function createJSON(pageData) {
  const dir = `${__dirname}/static/jsons`;

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  const filePath = `${dir}/page${pageData.pageSuffix}.json`;
  const dataToSave = JSON.stringify(pageData.context);

  fs.writeFile(filePath, dataToSave, () => {});
}

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
        id: node.id,
        slug: node.fields.slug,
        excerpt: node.excerpt,
        title: node.frontmatter.title,
        date: node.frontmatter.date,
      });
    }

    createPage({
      path: node.fields.slug,
      component: PostLayout,
      context: {
        id: node.id,
        slug: node.fields.slug,
      },
    });
  });

  const postsPerPage = 10;
  const numPages = Math.ceil(edges.length / postsPerPage);

  for (let i = 0; i < numPages; i++) {
    const skip = i * postsPerPage;
    const pagePosts = posts.filter((_, j) => {
      return j >= skip && j < skip + 10;
    });

    createJSON({
      pageSuffix: `${i + 1}`,
      context: {
        limit: postsPerPage,
        skip,
        numPages,
        currentPage: i + 1,
        posts: pagePosts,
      },
    });
  }
}

function onCreateNode({ node, getNode, actions }) {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: "posts" });

    createNodeField({ node, name: "slug", value: slug });
  }
}

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
