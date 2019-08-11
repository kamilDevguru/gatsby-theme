const path = require(`path`)
const _ = require('lodash')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const blogList = path.resolve(`./src/templates/blog-list.js`)
  // const tagTemplate = path.resolve(`./src/templates/tags.js`)

  return graphql(
    `
      {
        allContentfulBlog (
          sort: { fields: [date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              content {
                content
              }
              title
              tags {
                tagName
              }
              date(formatString: "DD [<span>] MMMM [</span>]")
              slug
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allContentfulBlog.edges

    // posts.forEach((post, index) => {
    //   const previous = index === posts.length - 1 ? null : posts[index + 1].node
    //   const next = index === 0 ? null : posts[index - 1].node

    //   createPage({
    //     path: post.node.slug,
    //     component: blogPost,
    //     context: {
    //       slug: post.node.slug,
    //       previous,
    //       next,
    //       tag: post.node.tags.map(tag => tag.tagName),
    //     },
    //   })
    // })

    // Create blog post list pages
    const postsPerPage = 6
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/page/1` : `/page/${i + 1}`,
        component: blogList,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })

    // // Tag pages:
    // let tags = []
    // // Iterate through each post, putting all found tags into `tags`
    // _.each(posts, edge => {
    //   if (_.get(edge, 'node.frontmatter.tags')) {
    //     tags = tags.concat(edge.node.frontmatter.tags)
    //   }
    // })
    // // Eliminate duplicate tags
    // tags = _.uniq(tags)

    // // Make tag pages
    // tags.forEach(tag => {
    //   createPage({
    //     path: `/tags/${_.kebabCase(tag)}/`,
    //     component: tagTemplate,
    //     context: {
    //       tag,
    //     },
    //   })
    // })

    return null
  })
}

// for React-Hot-Loader: react-🔥-dom patch is not detected
// exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
//   const config = getConfig()
//   if (stage.startsWith('develop') && config.resolve) {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       'react-dom': '@hot-loader/react-dom',
//     }
//   }
// }
