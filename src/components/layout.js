/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core"
import emotionNormalize from "emotion-normalize"
import { ThemeProvider } from "emotion-theming"
import { theme } from "../utils/styles"
import Header from "./header"

const Layout = ({ children, alternateHeader }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Global
        styles={css`
          ${emotionNormalize}

          *, *:before, &:after {
            box-sizing: border-box;
          }

          body {
            font-family: -apple-system, BlinkMacSystemFont, Arial, sans-serif;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: Montserrat, -apple-system, BlinkMacSystemFont,
              "Segoe UI", Arial, sans-serif;
            font-weight: 800;
          }
        `}
      />
      <ThemeProvider theme={theme}>
        <Header
          siteTitle={data.site.siteMetadata.title}
          alternate={alternateHeader}
        />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
