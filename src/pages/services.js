import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import headSeperator from "../images/heading-seperator.png"
import webDesign from "../images/web-design-service.jpg"
import onlineMarketing from "../images/online-marketing.jpg"
import {
  P,
  H1,
  H3,
  Wrap,
  ServiceHead,
  Section,
  Content,
  Image,
} from "../components/serviceComponents"

const ServicePage = () => (
  <Layout>
    <Seo title="Services" />

    <Wrap>
      <ServiceHead>
        <H1>Our Services</H1>
        <img src={headSeperator} alt="head-seperator" />
        <P>
          Elevate Your Businesses Capabilities With One Step. We offer a wide
          variety of website design services.
        </P>
      </ServiceHead>

      <Section>
        <Image src={webDesign} />
        <Content>
          <H3>Web Design</H3>
          <P>
            The technological wizardry has made it a need to have a presence
            online. The competition is no longer confined to your street, city
            or even nation, it is beyond boundaries. To widen your audience, a
            website is a necessity, rather a good website for that matter. And
            it does not end here, you ought to have a website which is
            user-friendly, informative, attractive and a responsive one.
          </P>

          <P>
            Our experts design the website keeping in mind the needs of your
            business and the expectations of the targeted audience.
          </P>
          <Link to="/web-designing">Read More...</Link>
        </Content>
      </Section>

      <Section>
        <Content>
          <H3>Online Marketing</H3>
          <P>
            Marketing is the backbone of any business and none can shrug off its
            value. This certainly is our competitive advantage. To build a
            rewarding marketing program and maintaining it thereafter, several
            tools exist online. But a few of them are search engine optimization
            campaigns, pay-per-click, banner advertising, email marketing,
            etcetera.
          </P>

          <P>
            These remain different from the conventional marketing strategies
            because the former ones possess the ability to widen the reach
            manifolds, globally.
          </P>
          <Link to="/online-marketing">Read More...</Link>
        </Content>
        <Image src={onlineMarketing} right />
      </Section>
    </Wrap>
  </Layout>
)

export default ServicePage
