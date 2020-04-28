import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import MeetupEvent from './meetupEvent'

const MeetupList = ({ children, filter }) => {
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
        .filter(typeof filter === 'function' ? filter : () => true)
        .map(event => (
          <a
            key={event.id}
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: `100%`, maxWidth: `60rem` }}
          >
            <MeetupEvent data={event} />
          </a>
        ))}
      {children}
    </div>
  )
}

export default MeetupList
