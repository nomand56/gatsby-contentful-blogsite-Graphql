exports.createPages = async  ({ graphql,actions }) => {
  const { createPage } = actions

  const response =await graphql(`
  query MyQuery {
    allContentfulBlogWebsite(sort: { fields: publishedOn, order: DESC }) {
      edges {
        node {
          text {
            raw
          }
          title {
            title
          }
          images {
            gatsbyImageData(width: 800)
          }
          slug
        }
      }
    }
  }`
  
  )
const post =  response.data.allContentfulBlogWebsite.edges
post.forEach(edge=>{
    createPage({
      path: `/blog/${edge.node.slug}`,
      component:require.resolve("./src/templates/blog-post.js"),
      context:edge.node
    
    })
  })}
