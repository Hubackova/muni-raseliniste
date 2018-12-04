module.exports = {
  siteMetadata: {
    title: `MIRE ECOLOGY GROUP - MUNI`,
  },
  plugins: [
    'gatsby-plugin-eslint',
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: "content",
      },
    },
    {
    resolve: `gatsby-source-filesystem`,
    options: {
        path: `${__dirname}/src/images/`,
        name: `images`,
    }
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-remark`,
  ],
  pathPrefix: "/raseliniste"
}