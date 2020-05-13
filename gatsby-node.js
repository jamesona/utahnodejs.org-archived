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
  const nodes = [
    { data: require('./content.js'), id: 'content', type: 'Content' },
    {
      data: {
        events: await (
          await fetch(
            `https://api.meetup.com/utahnodejs/events?&sign=true&photo-host=public&page=20`
          )
        ).json(),
      },
      id: 'meetup-events',
      type: 'Meetup',
    },
  ]

  nodes.forEach(({ data, id, type }) =>
    createNode({
      ...data,
      id,
      parent: null,
      children: [],
      internal: {
        type,
        contentDigest: createContentDigest(data),
      },
    })
  )
}
