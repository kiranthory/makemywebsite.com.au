import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import Row from "../components/Row"
import { H1 } from "../components/serviceComponents"
export const pageQuery = graphql`
  query GetProject($image: String) {
    image: file(relativePath: { eq: $image }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Section = styled.div({ padding: "70px 0", display: "flex" })

const Left = styled.div({ flex: "1 1 50%" })

const Content = styled.div({ flex: "1 1 50%", padding: "0px 0px 0px 30px" })

const Pcategory = styled.div({
  fontSize: "15px",
  fontWeight: 500,
})

const Plink = styled.div({
  fontSize: "18px",
  color: "#ED1C24",
  fontWeight: 800,
  paddingTop: "25px",
})

const ProjectPage = ({ pageContext: { project }, data: { image } }) => {
  return (
    <Layout>
      <Row>
        <Section>
          <Left>
            <Img fluid={image.childImageSharp.fluid} alt={project.title} />
          </Left>
          <Content>
            <H1>{project.title}</H1>
            <Pcategory>{project.tags}</Pcategory>

            <Plink>{project.url}</Plink>
          </Content>
        </Section>
      </Row>
    </Layout>
  )
}

export default ProjectPage
