import { createRemoteFileNode } from "gatsby-source-filesystem"

async function onCreateNode({ node, actions, store, cache }) {
  if (node.internal.type !== "DogImage") {
    return
  }

  const { createNode } = actions

  const fileNode = await createRemoteFileNode({
    url: node.url,
    store,
    cache,
    createNode,
    createNodeId: id => `dog-image-sharp-${id}`,
  })

  if (fileNode) {
    node.image___NODE = fileNode.id
  }
}

export default onCreateNode
