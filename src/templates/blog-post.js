import * as React from "react"
import { Link } from "gatsby"
import { getImage,GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
const BlogPost = ({pageContext}) => {
    const {title,text,images} = pageContext

  let image = getImage(images[0])

 return <Layout>
    <Seo title="Using DSG" />
<div className="blg-post">
    <div className="blg-heading">

    <h1>{title.title}</h1>
    </div>
<div className="blg-img">
<GatsbyImage image={image} alt="photo"/>
</div>
<div className="rich-text">
 {documentToReactComponents(JSON.parse(text.raw))} 

</div>


</div>
      <Link to="/">Go back to the homepage</Link>
  </Layout>

}

export default BlogPost
