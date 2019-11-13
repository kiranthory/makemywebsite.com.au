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

const WebdesignTarneit = () => (
  <Layout>
    <Seo title="Web Design Tarneit" />

    <Wrap>
      <ServiceHead>
        <H1>Web Design Tarneit</H1>
        <img src={headSeperator} alt="head-seperator" />
        <P>
          There is no denying the fact that our 5-star reviews on Google,
          Facebook, etcetera has accorded us with numerous loyal clients for the
          ingenuity of our work is applauded all over Australia. We have a
          number of clients in and around Tarneit who have been provided with
          great digital solutions.
        </P>
      </ServiceHead>

      <Section>
        <Image src={wyndhamVale} />
        <Content>
          <P>
            Our expertise in the vast field of Web Designing, Graphic Designing
            and Digital Marketing has helped hundreds and hundreds of our
            clientele so far.
          </P>
          <P>
            We work to the best of our capabilities and often walk an extra mile
            to satisfy our customers which entails our dedication towards our
            work.
          </P>
          <P>
            We at Make My Website, follow the ethical protocols. We do not let
            the pressure of generating revenue hamper our work ethics and hence
            our brand is known as the most credible one in the industry of
            digitalization.
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

export default WebdesignTarneit
