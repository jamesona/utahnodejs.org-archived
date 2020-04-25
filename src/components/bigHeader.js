import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SEO from './seo'

import './bigHeader.css'

const BigHeader = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const links = {
    Meetup: 'https://www.meetup.com/utahnodejs/',
    Slack: `https://utahjavascript.slack.com/`,
    Videos: `https://www.youtube.com/channel/UCTtJSLgPjnBXAZFUunzx2kw`,
    Events: `/#upcoming-events`,
  }
  return (
    <header>
      <SEO title="Home" />
      <h1>{data.site.siteMetadata.title}</h1>
      <div class="links">
        {Object.keys(links).map(text => (
          <a href={links[text]} key={text}>
            <h4 style={{ margin: `0` }}>{text}</h4>
          </a>
        ))}
      </div>
    </header>
  )
}

export default BigHeader
