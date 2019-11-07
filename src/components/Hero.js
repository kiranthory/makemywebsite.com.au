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
  backgroundImage: `url(${heroBg})`,
  backgroundSize: "cover",
  display: "flex",
  alignItems: "center",
  color: `#fff`,
  position: "relative",
})

const Content = styled(Row)({
  zIndex: 1,
})

const DarkOverlay = styled.div({
  position: "absolute",
  top: 0,
  left: 0,
  width: `100%`,
  height: `100%`,
  backgroundColor: "rgba(0,0,0,0.66)",
})

const Left = styled.div({
  flex: "1 1 auto",
  float: "left",
  width: "60%",
})

const Image = styled.img({
  flex: "0 0 auto",
  float: "right",
  width: "40%",
})

const Hero = () => (
  <Wrap>
    <DarkOverlay />
    <Content>
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
