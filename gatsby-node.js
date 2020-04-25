/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const fetch = require(`node-fetch`)
exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  const result = await fetch(
    `https://api.meetup.com/utahnodejs/events?&sign=true&photo-host=public&page=20`
  )

  const resultData = await result.json()

  createNode({
    events: [...resultData],

    // required fields
    id: `meetup-events`,
    parent: null,
    children: [],
    internal: {
      type: `Meetup`,
      contentDigest: createContentDigest({
        events: [...resultData],
      }),
    },
  })
}
