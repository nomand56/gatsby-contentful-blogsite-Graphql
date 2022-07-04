import * as React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage=()=>{
return <Layout>
<Seo title="Home"/>

<Link to="/blog/">Visit to blog website</Link>


</Layout>

}

export default IndexPage
