import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import headSeperator from "../images/heading-seperator.png"
import webMelbourne from "../images/web-designer-melbourne.jpg"
import werribeeMap from "../images/Watton-Street-Werribee.jpg"
import {
  P,
  H1,
  Wrap,
  ServiceHead,
  Section,
  Content,
  Image,
  ServiceBottom,
} from "../components/serviceComponents"

const WebdesignMelbourne = () => (
  <Layout>
    <Seo title="Web Design Melbourne" />

    <Wrap>
      <ServiceHead>
        <H1>Web Design Melbourne</H1>
        <img src={headSeperator} alt="head-seperator" />
        <P>
          The food and fashion capital of Australia has a lot of potential for
          emerging businesses for the city offers numerous opportunities and a
          vast fashion of growth. We are here to support the old and new
          businesses and assist them while they walk on their path of success by
          guiding them about the online world at every step and making sure they
          achieve their goals.
        </P>
      </ServiceHead>

      <Section>
        <Image src={webMelbourne} />
        <Content>
          <P>
            The win-win situation that has always created amidst us and our
            clients will continue to be in fashion. We have created umpteen
            websites for restaurants, retail brands, tradies, builders, and all
            other industries you can think of. Our work is the biggest example
            of our exemplary work and our capabilities and hence we assure
            results.
          </P>

          <P>
            The only thing we believe in is, a website has the ability to
            promote your business 24/7/365, then why not tailor your marketing
            strategy in accordance with the relevancy which is accepted
            worldwide?
          </P>
        </Content>
      </Section>

      <ServiceBottom>
        <H1>We Operate From Werribee </H1>
        <img
          src={werribeeMap}
          alt="129A Watton Street Werribee Victoria 3030 Australia"
        />
      </ServiceBottom>
    </Wrap>
  </Layout>
)

export default WebdesignMelbourne
