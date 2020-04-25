import React from 'react'

const MeetupEvent = ({
  data: {
    id,
    name,
    status,
    local_date,
    local_time,
    description,
    venue: { name: venueName, address_1: address, city },
  },
}) => {
  const combinedDate = new Date(local_date + ' ' + local_time)
  const localeDate = combinedDate.toDateString()
  const localeTime = combinedDate.toLocaleTimeString()

  return (
    <div
      data-id={id}
      data-status={status}
      style={{
        display: `inline-block`,
        background: `#fff`,
        borderRadius: `0.25rem`,
        padding: `1.5rem`,
        margin: `0.75rem 0`,
        boxShadow: ` 0 5px 5px rgba(0,0,0,0.1)`,
        color: `black`,
        width: `100%`,
      }}
      target="_blank"
    >
      <h6 style={{ color: `#004050`, margin: `0.25rem 0` }}>
        {localeDate} {localeTime}
      </h6>
      <h3 style={{ margin: `0.25rem 0` }}>{name}</h3>
      <h6 style={{ color: `#333` }}>{`${venueName}, ${address}, ${city}`}</h6>
      <div
        dangerouslySetInnerHTML={{
          __html:
            `<style>
            p {
              margin: 0.125rem;
              font-family: sans-serif;
            }
          </style>` + description,
        }}
      ></div>
    </div>
  )
}

export default MeetupEvent
