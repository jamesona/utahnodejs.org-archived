import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import MeetupEvent from './meetupEvent'

const MeetupList = ({ filter }) => {
  const data = useStaticQuery(graphql`
    query {
      meetup {
        events {
          id
          name
          status
          local_date
          local_time
          link
          description
          venue {
            name
            address_1
            city
          }
        }
      }
    }
  `)

  return (
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
      }}
    >
      {data.meetup.events
        .filter(event => (typeof filter === 'function' ? filter(event) : true))
        .map(event => (
          <a
            href={event.link}
            target="_blank"
            style={{ width: `100%`, maxWidth: `60rem` }}
          >
            <MeetupEvent data={event} />
          </a>
        ))}
    </div>
  )
}

export default MeetupList
