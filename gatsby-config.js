module.exports = {
  siteMetadata: {
    title: `🇮🇹 Rₜ COVID-19 Italia`,
    description: `Numero effettivo di riproduzione del virus in Italia.`,
    author: `@BiuniGianluca`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-csv`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rt-italy`,
        short_name: `rt-italy`,
        start_url: `/`,
        background_color: `#f9f9f9`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
