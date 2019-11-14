import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import headSeperator from "../images/heading-seperator.png"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const PageBg = styled.div({
  background: "#F2F2F2",
  padding: `50px 0`,
  "& *": {
    boxSizing: "border-box",
  },
})

const PageOuter = styled.div({
  maxWidth: 1200,
  margin: "0 auto",
})

const PortfolioOuter = styled.div({})

const PortfolioTitle = styled.h1({
  textAlign: "center",
  span: {
    display: "block",
    marginTop: "20px",
  },
})

const FilterButton = styled.div({
  textAlign: "center",
  padding: "15px",
})

const FilterItem = styled.button(
  {
    cursor: "pointer",
    background: "transparent",
    border: "1px solid #D3D3D3",
    padding: "7px 15px",
    fontSize: "14px",
    fontWeight: "600",
    color: "#3A3A3A",
    margin: "0 5px 10px",
    "&:hover": {
      background: "#fff",
    },
    "&:focus": {
      outline: "none",
    },
  },
  ({ active }) => ({
    background: active && "#fff",
  })
)

const PortfolioList = styled.ul({
  margin: 0,
  padding: 0,
})

const PortfolioItem = styled.li({
  width: "25%",
  maxHeight: "300px",
  overflow: "hidden",
  display: "inline-block",
  verticalAlign: "top",
  padding: "15px",
  position: "relative",
  "& img": {
    width: "100%",
    border: "5px solid #fff",
  },
})

const PortfolioItemTitle = styled.span({
  display: "inline-block",
  background: "rgba(0,0,0,0.8)",
  color: "#fff",
  padding: "7px 15px",
  position: "absolute",
  top: "43%",
  left: "15%",
  width: "70%",
  textAlign: "center",
  fontSize: "15px",
  lineHeight: "20px",
})

export const pageQuery = graphql`
  query GetProjects {
    images: allFile(filter: { relativeDirectory: { eq: "portfolio" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const AllProjectsPage = ({ pageContext: { projects }, data }) => {
  const [activeTag, setActiveTag] = useState(undefined)

  const projectsWithImages = projects.map(project => {
    const image = data.images.edges.find(
      image => image.node.relativePath === project.image
    )

    if (!image) console.log("project with no image", project)

    const newProject = {
      ...project,
      childImageSharp: image ? image.node.childImageSharp : undefined,
    }

    return newProject
  })

  const tags = projects
    .map(project => project.tags)
    .reduce((allTags, currentTags) => [...allTags, ...currentTags], [])
  const uniqueTags = Array.from(new Set(tags))

  return (
    <Layout>
      <PageBg>
        <PageOuter>
          <Seo title="Portfolio" />
          <PortfolioTitle>
            Our Portfolio
            <span>
              <img src={headSeperator} alt="head-seperator" />
            </span>
          </PortfolioTitle>

          <FilterButton>
            <FilterItem
              onClick={() => setActiveTag(undefined)}
              active={activeTag === undefined}
            >
              All
            </FilterItem>
            {uniqueTags.map(tag => (
              <FilterItem
                key={tag}
                onClick={() => setActiveTag(tag)}
                active={activeTag === tag}
              >
                {tag}
              </FilterItem>
            ))}
          </FilterButton>

          <PortfolioOuter>
            <PortfolioList>
              {projectsWithImages
                .filter(
                  project =>
                    activeTag === undefined || project.tags.includes(activeTag)
                )
                .map((project, index) => {
                  return (
                    <PortfolioItem key={index}>
                      <Link to={`/portfolio/${project.path}`}>
                        {project.childImageSharp && (
                          <Img fluid={project.childImageSharp.fluid} />
                        )}
                        <PortfolioItemTitle>{project.title}</PortfolioItemTitle>
                      </Link>
                    </PortfolioItem>
                  )
                })}
            </PortfolioList>
          </PortfolioOuter>
        </PageOuter>
      </PageBg>
    </Layout>
  )
}

export default AllProjectsPage
