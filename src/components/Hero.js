import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import Row from "./Row"

import heroBg from "../images/hero-bg.jpg"

const Wrap = styled.div({
  height: "100vh",
  maxHeight: "50vh",
  backgroundImage: `url(${heroBg})`,
  backgroundSize: "cover",
  display: "flex",
  alignItems: "center",

  color: `#fff`,
})

const Hero = () => (
  <Wrap>
    <Row>
      <h1>Speak with Our Specialists to expand your social reach</h1>
      <p>
        We build successful responsive mobile sites that genuinely connect with
        your target audience.
      </p>
    </Row>
  </Wrap>
)

export default Hero
