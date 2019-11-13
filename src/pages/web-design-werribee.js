import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import headSeperator from "../images/heading-seperator.png"
import webWerribee from "../images/web-design-werribee.jpg"
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

const WebDesignWerribee = () => (
  <Layout>
    <Seo title="Web Design Werribee" />

    <Wrap>
      <ServiceHead>
        <H1>Web Design Werribee</H1>
        <img src={headSeperator} alt="head-seperator" />
        <P>
          At Make My Website, we are a group of highly trained and skilled
          professionals who work with you to create your online presence and are
          dedicated to meet the goals and guidelines to deliver your project. We
          are based in Sydney and Melbourne with clients all over Australia. We
          are just one phone call away to make give your business an online
          presence.
        </P>
      </ServiceHead>

      <Section>
        <Image src={webWerribee} />
        <Content>
          <P>
            Here at Make My Website, we love our work and highly rely on
            customer satisfaction. We are excel in developing stunning,
            intelligent and engaging websites that work wonders for our clients.
            There isn’t anything we can’t do, but if there is, we are very
            upfront, so that you won’t waste your time and money. For us nothing
            is big or small we take projects just not to add revenue to our
            table as we believe in learning from each and every project.
          </P>

          <P>
            At Make My Website, we are infallible, creative and insightful that
            what makes us different.
          </P>
        </Content>
      </Section>
      <ServiceBottom>
        <h1>We Operate From Werribee </h1>
        <img
          src={werribeeMap}
          alt="129A Watton Street Werribee Victoria 3030 Australia"
        />
      </ServiceBottom>
    </Wrap>
  </Layout>
)

export default WebDesignWerribee
