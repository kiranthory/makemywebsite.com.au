import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Image"
import Seo from "../components/Seo"
import Hero from "../components/Hero"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image src="../images/gatsby-astronaut.png" />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
