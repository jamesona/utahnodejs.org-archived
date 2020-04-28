import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import MeetupList from '../components/meetups'

const SecondPage = () => (
  <Layout>
    <SEO title="Events" />
    <h1>Events</h1>
    <MeetupList />
  </Layout>
)

export default SecondPage
