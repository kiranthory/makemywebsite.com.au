import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Button } from "rebass"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { IoIosArrowDown } from "react-icons/io"
import Layout from "../components/Layout"
import Image from "../components/Image"
import Seo from "../components/Seo"
import Row from "../components/Row"
import HeroBackground from "../components/HeroBackground"
import HeroBackground2 from "../components/HeroBackground2"

const Hero = styled.div({
  minHeight: `100vh`,
  display: "flex",
  alignItems: "center",
  position: "relative",
  color: "#fff",
})

const HeroRow = styled(Row)({
  paddingTop: 20,
  paddingBottom: 20,
  zIndex: 1,
  position: "relative",
})

const HeroH1 = styled.h1({
  fontSize: 40,
  fontWeight: 700,
  maxWidth: 680,
  lineHeight: 1.4,
  marginTop: 0,
  marginBottom: 20,
})

const HeroP = styled.p({
  fontSize: 20,
  fontWeight: 400,
  maxWidth: 480,
  lineHeight: 1.5,
  marginBottom: 40,
})

const Content = styled.div({
  background: `#fff`,
})

const Btn = styled(Button)({
  marginRight: 15,
  borderRadius: `100px`,
  background: `#ed1c24`,
  padding: `10px 20px`,
  cursor: "pointer",
  fontFamily: `Montserrat, -apple-system, BlinkMacSystemFont, Arial, sans-serif`,
})

const anchorCss = css({
  position: "absolute",
  bottom: 0,
  left: `50%`,
  transform: `translateX(-50%)`,
  background: "none",
  border: 0,
  padding: 10,
})

const IndexPage = () => {
  const isBrowser = typeof window !== "undefined"

  return (
    <Layout alternateHeader>
      <Seo title="Home" />

      <Hero>
        <div
          css={{
            background: "#000",
            position: "fixed",
            width: `100%`,
            height: `100%`,
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          {isBrowser && <HeroBackground2 />}
        </div>
        <HeroRow>
          <HeroH1>If it's not done to perfection, don't do it at all.</HeroH1>
          <HeroP>
            Highest rated digital agency in Australia. We build successful
            responsive sites that genuinely connect with your target audience.
          </HeroP>
          <Btn>Contact Us</Btn>
          <Btn>Our Services</Btn>
        </HeroRow>
        <AnchorLink href="#content" css={anchorCss}>
          <IoIosArrowDown fill="#fff" size="40" />
        </AnchorLink>
      </Hero>

      <Content id="content">
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image src="../images/gatsby-astronaut.png" />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Content>
    </Layout>
  )
}

export default IndexPage
