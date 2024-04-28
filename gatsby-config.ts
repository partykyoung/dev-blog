import type { GatsbyConfig } from 'gatsby';

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
    'gatsby-plugin-postcss',
    // "gatsby-plugin-google-gtag", FIXME: 리팩토링 끝나고 나서 애널리틱스 계정 생성 후 연동 필요
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: `${__dirname}/static/images/icon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              showCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
            },
          },
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
        ignore: [`${__dirname}/static/jsons/`],
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/posts/`,
        ignore: [`${__dirname}/static/jsons/`],
      },
      __key: 'posts',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/images/`,
        ignore: [`${__dirname}/static/jsons/`],
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'jsons',
        path: `${__dirname}/static/jsons/`,
        ignore: [`${__dirname}/static/jsons/`],
      },
      __key: 'jsons',
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
            file: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap',
          },
        ],
      },
    },
  ],
};

export default config;
