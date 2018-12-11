const path = require(`path`)

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
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-remark`,
  ],
  pathPrefix: "/raseliniste"
}