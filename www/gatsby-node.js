const path = require("path")

// Create page
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const post = path.resolve(`src/templates/Post.js`)

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const nodePath = node.frontmatter.path

      if (nodePath.length !== 0) {
        createPage({
          path: nodePath,
          component: post,
          context: {}, // additional data can be passed via context
        })
      }
    })
  })
}

// Webpack Setup
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}
