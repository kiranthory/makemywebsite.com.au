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

const WebdesignHoppersCrossing = () => (
  <Layout>
    <Seo title="Web Design Hoppers Crossing" />

    <Wrap>
      <ServiceHead>
        <H1>Web Design Hoppers Crossing</H1>
        <img src={headSeperator} alt="head-seperator" />
        <P>
          Hoppers Crossing happens to have got the advantage of being just 20
          minutes away from our office in Werribee. We have been associated with
          famous businesses in Hoppers Crossing who got the best websites for
          their businesses from the experts in the country.
        </P>
      </ServiceHead>

      <Section>
        <Image src={wyndhamVale} />
        <Content>
          <P>
            We have made over 400 websites till date in such a short span of
            time, in almost every industry and business that exists. Right from
            small to large businesses, we have catered it all.
          </P>
          <P>
            Our packages are tailored with respect to the clients’ requirements
            and demands. Also, we try to be in the budget range of our clients
            which certainly is an important aspect while running any business.
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

export default WebdesignHoppersCrossing
