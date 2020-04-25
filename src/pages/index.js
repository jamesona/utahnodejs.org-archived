import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import MeetupList from '../components/meetups'

const IndexPage = () => {
  // type MeetupEvent {
  //   id: String
  //   name: String
  //   status: String
  //   local_date: String
  //   local_time: String
  //   link: String
  //   description: String
  // }
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
    <>
      <div
        style={{
          backgroundColor: `rgb(47, 47, 47)`,
          backgroundImage: `linear-gradient(60deg, rgb(36, 65, 90), rgb(86, 160, 81) 40%, rgb(86, 160, 81) 60%, rgb(36, 65, 90) )`,
          color: `white`,
          margin: `-1.45rem auto 0`,
          maxWidth: `100vw`,
          padding: `5rem 6rem`,
          textAlign: `center`,
        }}
      >
        <SEO title="Home" />
        <h1>{data.site.siteMetadata.title}</h1>
        <div style={{ display: `flex`, justifyContent: 'center' }}>
          {Object.keys(links).map(text => (
            <a
              href={links[text]}
              style={{
                color: `inherit`,
                textDecoration: `none`,
                textTransform: `capitalize`,
                display: `inline-block`,
                border: `1px solid white`,
                borderRadius: `1rem`,
                padding: `2rem`,
                marginRight: `2rem`,
              }}
              key={text}
            >
              <h4 style={{ margin: `0` }}>{text}</h4>
            </a>
          ))}
        </div>
      </div>
      <Layout includeHeader={false}>
        <h2 id="organizers">Organizers</h2>
        <h2 id="upcoming-events">Upcoming Events</h2>
        <MeetupList />
      </Layout>
    </>
  )
}

export default IndexPage
