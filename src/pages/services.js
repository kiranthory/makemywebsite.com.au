import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import styled from "@emotion/styled"
import Row from "../components/Row"
import headSeperator from "../images/heading-seperator.png"
import webDesign from "../images/web-design-service.jpg"
import onlineMarketing from "../images/online-marketing.jpg"

const Wrap = styled.div({
  p: {
    lineHeight: "28px",
    marginTop: "0px",
    marginBottom: "15px",
  },

  h3: {
    fontSize: "30px",
    marginTop: "0px",
  },
})

const ServiceHead = styled(Row)({
  textAlign: "center",
  h1: {
    fontSize: "50px",
    marginBottom: "20px",
    fontWeight: 700,
    fontFamily: "Roboto",
  },

  img: {
    marginBottom: "25px",
  },
})

const Section = styled(Row)({
  display: "flex",
})

const Content = styled.div({
  flex: `1 1 50%`,
  padding: "30px",
})

const BgWrap = styled.div({
  flex: `1 1 50%`,
  maxWidth: `50%`,
  position: "relative",
})

const Bg = styled.div(
  {
    position: "absolute",
    right: 0,
    height: `100%`,
    width: `calc(50vw)`,
    backgroundSize: "cover",
  },
  props => {
    console.log("props", props)
    return {
      backgroundImage: `url(${props.src})`,
      left: props.right && 0,
      right: !props.right && 0,
    }
  }
)

const Image = ({ ...props }) => (
  <BgWrap>
    <Bg {...props} />
  </BgWrap>
)

const ServicePage = () => (
  <Layout>
    <Seo title="Services" />

    <Wrap>
      <ServiceHead>
        <h1>Our Services</h1>
        <img src={headSeperator} alt="head-seperator" />
        <p>
          Elevate Your Businesses Capabilities With One Step. We offer a wide
          variety of website design services.
        </p>
      </ServiceHead>

      <Section>
        <Image src={webDesign} />
        <Content>
          <h3>Web Design</h3>
          <p>
            The technological wizardry has made it a need to have a presence
            online. The competition is no longer confined to your street, city
            or even nation, it is beyond boundaries. To widen your audience, a
            website is a necessity, rather a good website for that matter. And
            it does not end here, you ought to have a website which is
            user-friendly, informative, attractive and a responsive one.
          </p>

          <p>
            Our experts design the website keeping in mind the needs of your
            business and the expectations of the targeted audience.
          </p>
          <Link to="/web-designing">Read More...</Link>
        </Content>
      </Section>

      <Section>
        <Content>
          <h3>Online Marketing</h3>
          <p>
            Marketing is the backbone of any business and none can shrug off its
            value. This certainly is our competitive advantage. To build a
            rewarding marketing program and maintaining it thereafter, several
            tools exist online. But a few of them are search engine optimization
            campaigns, pay-per-click, banner advertising, email marketing,
            etcetera.
          </p>

          <p>
            These remain different from the conventional marketing strategies
            because the former ones possess the ability to widen the reach
            manifolds, globally.
          </p>
          <Link to="/online-marketing">Read More...</Link>
        </Content>
        <Image src={onlineMarketing} right />
      </Section>
    </Wrap>
  </Layout>
)

export default ServicePage
