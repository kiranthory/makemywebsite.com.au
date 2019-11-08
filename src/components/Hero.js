import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import Row from "./Row"
import heroBg from "../images/hero-bg.jpg"
import heroMap from "../images/hero-map.png"

const Wrap = styled.div({
  height: "100vh",
  maxHeight: "50vh",
  backgroundColor: `#000`,
  color: `#fff`,
  position: "relative",
})

const Hero = () => (
  <Wrap>
    <Content className="test">
      <p>Hello</p>
      <Left>
        <h1>Speak with Our Specialists to expand your social reach</h1>
        <p>
          We build successful responsive mobile sites that genuinely connect
          with your target audience.
        </p>
      </Left>
      <Image src={heroMap} />
    </Content>
  </Wrap>
)

export default Hero
