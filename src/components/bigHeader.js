import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SEO from './seo'

import './bigHeader.css'

const BigHeader = () => {
  const {
    site: {
      siteMetadata: { title, links },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          links {
            text
            url
          }
        }
      }
    }
  `)

  return (
    <header class="big">
      <SEO title="Home" />
      <h1>{title}</h1>
      <div class="links">
        {links.map(({ text, url }) => (
          <a href={url} key={text}>
            <h4 style={{ margin: `0` }}>{text}</h4>
          </a>
        ))}
      </div>
    </header>
  )
}

export default BigHeader
