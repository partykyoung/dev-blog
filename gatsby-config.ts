<<<<<<< HEAD
<<<<<<< HEAD
import fs from 'fs';

import type { GatsbyConfig } from 'gatsby';

// 페이징에 필요한 폴더 및 json 파일을 만든다.
function createJsonsDir() {
  const dir = `${__dirname}/static/jsons`;

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

createJsonsDir();

const config: GatsbyConfig = {
  siteMetadata: {
    title: `dev-blog`,
    siteUrl: `https://dev.kyoungah.me`,
=======
=======
import fs from "fs";

>>>>>>> b6708e4 (chore: 설정 변경)
import type { GatsbyConfig } from "gatsby";

// 페이징에 필요한 폴더 및 json 파일을 만든다.
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
<<<<<<< HEAD
    siteUrl: `https://www.yourdomain.tld`
>>>>>>> ce459de (Initial commit from gatsby)
=======
    siteUrl: `https://dev.kyoungah.me`,
>>>>>>> b6708e4 (chore: 설정 변경)
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
<<<<<<< HEAD
<<<<<<< HEAD
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'static/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              showCaptions: true
            },
          }, 
          {
            resolve: `gatsby-remark-prismjs`,
            options: {          
              classPrefix: "language-",
            }
          }
        ],
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'jsons',
        path: `${__dirname}/static/jsons`,
      },
      __key: 'jsons',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/images/`,
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/posts/`,
      },
      __key: 'posts',
    },
    {
      resolve: 'gatsby-omni-font-loader',
      options: {
        enableListener: '',
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Nanum Gothic`,
            file: `https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap`,
          },
          {
            name: 'Fira Code',
            file: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap'
          }
        ],
      },
    }
  ],
=======
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-google-gtag", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
=======
  plugins: [
    "gatsby-plugin-postcss",
    // "gatsby-plugin-google-gtag",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: `${__dirname}/static/images/icon.png`,
      },
>>>>>>> b6708e4 (chore: 설정 변경)
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
<<<<<<< HEAD
    __key: "pages"
  }]
>>>>>>> ce459de (Initial commit from gatsby)
=======
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
>>>>>>> b6708e4 (chore: 설정 변경)
};

export default config;
