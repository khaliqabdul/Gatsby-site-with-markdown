//const path = require('path')

exports.createPages = async ({ graphql, actions }) => {

    const { data } = await graphql(`
    query Projects {
        allMarkdownRemark {
          nodes {
            frontmatter {
              slug
            }
          }
        }
      }
      
    `)
    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path: `/projects/${node.frontmatter.slug}`,
            component: require.resolve('./src/templates/project-details.js'),
            context: {
                slug: node.frontmatter.slug
            }
        })
    });
}