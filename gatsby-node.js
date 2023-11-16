const path = require(`path`);
const fs = require('fs');

const { createFilePath } = require('gatsby-source-filesystem');

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

exports.createPages = ({ graphql }) => {
  return graphql(`
    {
      allMarkdownRemark(
        sort: {frontmatter: {date: DESC}}, limit: 1000
      ) {
        edges {
          node {
            id,
            excerpt(truncate: true, pruneLength: 200),
            frontmatter {
              tags,
              title,
              slug
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

    const posts = edges.map(({ node }) => ({
      id: node.id,
      slug: node.frontmatter.slug,
      excerpt: node.excerpt,
      title: node.frontmatter.title,
      date: node.frontmatter.date,
    }));

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
