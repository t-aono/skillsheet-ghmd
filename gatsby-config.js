module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    description: "This site is sample",
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/skill-sheet.md`,
      },
    },
    `gatsby-transformer-remark`,
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-HPE8D90RHK"],
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
};
