module.exports = {
  siteMetadata: {
    title: `Utah Node.js`,
    description: `Homepage of the Utah Node.js meetup`,
    links: [
      {
        text: 'Meetup',
        url: 'https://www.meetup.com/utahnodejs/',
      },
      {
        text: 'Slack',
        url: `https://utahjavascript.slack.com/`,
      },
      {
        text: 'Videos',
        url: `https://www.youtube.com/channel/UCTtJSLgPjnBXAZFUunzx2kw`,
      },
      {
        text: 'Events',
        url: `#upcoming-events`,
      },
    ],
    organizers: [
      {
        name: 'Devan Sisson',
        img:
          'https://secure.meetupstatic.com/photos/member/a/c/4/3/member_265364099.jpeg',
      },
      {
        name: 'Ethan Garofolo',
        img:
          'https://secure.meetupstatic.com/photos/member/6/5/2/4/member_118705892.jpeg',
      },
      {
        name: 'Aaron Seth Madsen',
        img:
          'https://secure.meetupstatic.com/photos/member/6/5/2/4/member_270602093.jpeg',
      },
      {
        name: "AJ O'Neal",
        img:
          'https://secure.meetupstatic.com/photos/member/6/5/2/4/member_147162062.jpeg',
      },
    ],
    author: `@jamesona`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
