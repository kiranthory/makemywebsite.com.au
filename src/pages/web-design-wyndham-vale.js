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

const WebdesignWyndham = () => (
  <Layout>
    <Seo title="Web Design Wyndham" />

    <Wrap>
      <ServiceHead>
        <H1>Web Design Wyndham</H1>
        <img src={headSeperator} alt="head-seperator" />
        <P>
          With the Wyndham area being bombarded with hardworking businesses, we
          at Make My Website offer them with all sorts of web design, graphic
          design and digital marketing services, which include SEO Marketing,
          Social Media Marketing, Google AdWords, Pay Per Click, etcetera. Our
          successful ties with local businesses reflect our ability to build
          successful relationships, and this is what we have been doing since
          the foundation of Make My Website was laid. The team of professionals
          here works vigorously to meet the clients’ demands and meet up to
          their satisfaction level and provide them with innovative and best web
          designs along with the smooth functionalities.
        </P>
      </ServiceHead>

      <Section>
        <Image src={wyndhamVale} />
        <Content>
          <P>
            We do endorse ourselves as the best web design agency in Australia,
            however, the reviews and testimonies from our clients do the rest of
            the talking.
          </P>
          <P>
            To quote what one of our clients from Wyndham Vale had to say,
            “Excellent services and timely completion! –
            naileditfencingandcarpentry.com.au”
          </P>
          <P>
            Having said that, community building is a priority for us to create
            synergies together and hence we welcome more and more businesses in
            Wyndham Vale to associate with us.
          </P>
          <P>
            For a business to be successful, it is essential to strengthen the
            roots, which certainly is done by laying the foundation of your
            online presence in front of the prospective customers. Count on us
            to enhance the aspect of your business digitally for we believe in
            value, sincerity and results!
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

export default WebdesignWyndham
