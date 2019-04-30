import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Starter from "../components/starter/Starter"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Starter />
  </Layout>
)

export default IndexPage
