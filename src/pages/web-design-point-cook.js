import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import headSeperator from "../images/heading-seperator.png"
import wyndhamVale from "../images/webdesign-wynhamvale.jpg"
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

const WebdesignPointcook = () => (
  <Layout>
    <Seo title="Web Design Point Cook" />

    <Wrap>
      <ServiceHead>
        <H1>Web Design Point Cook</H1>
        <img src={headSeperator} alt="head-seperator" />
        <P>
          Web Designers and Developers who work hard not to just deliver a
          project, but to innovate in an impressive manner, luckily are a part
          of the Team at Make My Website. Point Cook, one of the most gorgeous
          suburbs of Melbourne of the City of Wyndham has all its web design,
          graphic design and digital marketing needs to be sorted as we are
          gladly associating with the locals to help small businesses and grow
          together.
        </P>
      </ServiceHead>

      <Section>
        <Image src={wyndhamVale} />
        <Content>
          <P>
            There is a lot to learn from every business and hence with each
            passing day our knowledge is being enhanced as we get to deal with
            several businesses who are embarked on the same vision of
            contributing to the community in one way or the other.
          </P>
          <P>
            We are grateful to our clients who have genuinely supported us till
            date as we see ourselves grow every moment, all because of the
            immaculate honesty with which our team works and the sober demeanor
            our clients possess.
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

export default WebdesignPointcook
