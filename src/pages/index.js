import React from 'react'

import BigHeader from '../components/bigHeader'
import Layout from '../components/layout'
import MeetupList from '../components/meetups'
import Organizers from '../components/organizers'

const IndexPage = () => {
  return (
    <>
      <BigHeader></BigHeader>
      <Layout includeHeader={false}>
        <h2 id="organizers">Organizers</h2>
        <Organizers />
        <h2 id="upcoming-events">Upcoming Events</h2>
        <MeetupList
          filter={(m, i) => {
            console.log(m, i)
            return i < 2
          }}
        >
          <a
            href="events"
            style={{
              padding: `1rem`,
              color: `inherit`,
              background: `#fff`,
              borderRadius: `0.25rem`,
              boxShadow: `0 5px 5px rgba(0, 0, 0, 0.1)`,
              margin: `0.5rem auto`,
              fontWeight: `bold`,
            }}
          >
            See More
          </a>
        </MeetupList>
      </Layout>
    </>
  )
}

export default IndexPage
