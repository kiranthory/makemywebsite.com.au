module.exports = {
  siteMetadata: {
    title: `Make My Website`,
    description: `Make My Website is an affordable Web Design company located in Melbourne, Australia. We have been mastering the art of Web Design, SEO, Development and SMM`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          // before launching, make sure to delete most of these weights and only keep the used ones
          families: ["Montserrat:200,300,400,500,600,700,800"],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
