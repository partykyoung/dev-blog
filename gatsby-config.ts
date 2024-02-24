import fs from "fs";

import type { GatsbyConfig } from "gatsby";

function createFolder(folderName: string) {
  const dir = `${__dirname}/static/${folderName}`;

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

createFolder("jsons");
createFolder("posts");

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Kyoungah Dev Blog`,
    siteUrl: `https://dev.kyoungah.me`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    // "gatsby-plugin-google-gtag", FIXME: 리팩토링 끝나고 나서 애널리틱스 계정 생성 후 연동 필요
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: `${__dirname}/static/images/icon.png`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/posts/`,
      },
      __key: "posts",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/static/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "jsons",
        path: `${__dirname}/static/jsons/`,
      },
      __key: "jsons",
    },
  ],
};

export default config;
