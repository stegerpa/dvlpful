module.exports = {
  siteMetadata: {
    title: `John Doe - Fullstack Software Solutions`,
    description: `Kick off your next, great software project. I will help you implement the software of your needs.`,
    author: `Patrick Steger`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `SPACE_ID`,
        accessToken: `ACCSES_TOKEN`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
