import React from 'react'

import BigHeader from '../components/bigHeader'
import Layout from '../components/layout'
import MeetupList from '../components/meetups'

const IndexPage = () => {
  return (
    <>
      <BigHeader></BigHeader>
      <Layout includeHeader={false}>
        <h2 id="organizers">Organizers</h2>
        <h2 id="upcoming-events">Upcoming Events</h2>
        <MeetupList />
      </Layout>
    </>
  )
}

export default IndexPage
