module.exports = {
  siteMetadata: {
    title: `MIRE ECOLOGY GROUP - MUNI`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-next`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    `gatsby-transformer-remark`,
  ],
    pathPrefix: "/raseliniste"

}