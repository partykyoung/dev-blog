import path from 'path';
import fs from 'fs';

import { createFilePath} from 'gatsby-source-filesystem';

import Post from './src/commons/templates/PostTemplate';

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

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(
        sort: {frontmatter: {date: DESC}}, limit: 1000
      ) {
        edges {
          node {
            id,
            excerpt(truncate: true, pruneLength: 200),
            fields {
              slug
            },
            frontmatter {
              tags,
              title,
              publish
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const { edges } = result.data.allMarkdownRemark;
    const posts = [];

    edges.forEach(({node}) => {
      createPage({
        path: node.fields.slug,
        component: Post,
        context: {
          slug: node.fields.slug
        }, // additional data can be passed via context
      });

      if (node.frontmatter.publish) {
        posts.push({
          id: node.id,
          slug: node.fields.slug,
          excerpt: node.excerpt,
          title: node.frontmatter.title,
          date: node.frontmatter.date
        })
      }
    })

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
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'posts' })

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}