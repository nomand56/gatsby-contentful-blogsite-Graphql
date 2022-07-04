import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import TextTruncate from "react-text-truncate"
const Blog = ({ data }) => {
 
  let image;
  return (
    <Layout>
      <div className="blg-posts-container">
        {
          data.allContentfulBlogWebsite.edges.map((item) => {
            (image = getImage(item.node.images[0]))
            return  (
            <div className="post-container">
              
                {/* */}
                <div className="post-img">
                <GatsbyImage image={image} alt="notj" />
                </div>
                <div className="title-container">
                  <h1>{item.node.title.title}</h1>
                  <div className="post-desc">
                    <TextTruncate
                      line={1}
                      element="p"
                      truncateText="…"
                      ellipsis="&hellip;"
                      width={20}
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
                      textTruncateChild={
                        <Link to={`/blog/${item.node.slug}/`}>Read on</Link>
                      } 
                    />
                  </div>
                </div>
              </div>
            )
          }
        )}
      </div>
    </Layout>
  )
}

export default Blog

export const query = graphql`
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
            gatsbyImageData(width: 200)
          }
          slug
        }
      }
    }
  }
`
