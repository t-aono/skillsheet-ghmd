module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    description: "This site is sample",
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      //   resolve: `gatsby-source-rss-feed`,
      //   options: {
      //     url: `https://zenn.dev/aono/feed`,
      //     name: `Zenn`,
      //   },
      // },
      // {
      resolve: `gatsby-source-filesystem`,
      options: {
        // name: "works",
        // path: `${__dirname}/src/works.yaml`,
        path: `${__dirname}/src/skill-sheet.md`,
      },
    },
    // "gatsby-transformer-yaml",
    `gatsby-transformer-remark`,
    "gatsby-plugin-react-helmet",
  ],
};
