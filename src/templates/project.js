import React from "react"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import Row from "../components/Row"

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

const ProjectPage = ({ pageContext: { project }, data: { image } }) => {
  return (
    <Layout>
      <Row>
        <h1>{project.title}</h1>
        <Img fluid={image.childImageSharp.fluid} alt={project.title} />
      </Row>
    </Layout>
  )
}

export default ProjectPage
