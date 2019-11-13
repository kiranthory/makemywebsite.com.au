import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import headSeperator from "../images/heading-seperator.png"

import { H1, Wrap, ServiceHead, Section } from "../components/serviceComponents"

const GraphicPortfolio = () => (
  <Layout>
    <Seo title="Graphic Portfolio" />

    <Wrap>
      <ServiceHead>
        <H1>Graphic Portfolio</H1>
        <img src={headSeperator} alt="head-seperator" />
      </ServiceHead>

      <Section></Section>
    </Wrap>
  </Layout>
)

export default GraphicPortfolio
