import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import headSeperator from "../images/heading-seperator.png"
import webPenrith from "../images/web-design-penrith.jpg"
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

const WebDesignPenrith = () => (
  <Layout>
    <Seo title="Quality Provider Web Design Penrith" />

    <Wrap>
      <ServiceHead>
        <H1>Quality Provider Web Design Penrith</H1>
        <img src={headSeperator} alt="head-seperator" />
        <P>
          Make My Website is a team of passionate web designers Penrith willing
          to work your way to help with the online presence of your business. We
          work closely with our clients to provide them the best web solutions
          by utilizing our team’s expertise and experience. The kind of web
          design Penrith we offer is unmatched because we maintain high
          standards in terms of quality and delivery of service.
        </P>
      </ServiceHead>

      <Section>
        <Image src={webPenrith} />
        <Content>
          <P>
            We are established with a vision of delivering only the best, and
            work in conjunction with your current business model, thereby
            providing quality web design in Penrith. No wonder your business
            would be going at a good pace, yet having a website is an identity
            you can’t afford to miss having. Opt for a professional web designer
            Penrith like us at Make My Website and have your website designed.
          </P>

          <P>
            With us, you will be at ease as we coordinate with our clients
            regularly to deliver the project as quickly as possible. We walk the
            extra mile to provide you with efficient web design, and hence,
            that’s the reason we are a reliable web design company Penrith. Our
            works speaks for us, which is evident from hundreds of 5-star
            reviews from our clients on platforms like Google, Facebook,
            Oneflare, and Word-of-mouth.
          </P>
          <P>
            This is because we not only deliver stunning web design Penrith, but
            also provide excellent customer support. We are your local web
            design company Penrith that has designed over 400 websites in such a
            short span of time and has worked closely with almost every
            industry.
          </P>
        </Content>
      </Section>

      <ServiceBottom>
        <P>
          Getting a website designed from us means your website will be fully
          optimized, tested for speed and responsiveness, and will be SEO
          friendly. We can proudly say that our service is unmatched, and we
          always keep client’s first. Our team is known for their creative take
          towards web design Penrith, and we always try to exceed your
          expectations. For us, no work is small or big, as long as our client’s
          requirements are met, we are happy to move forward. Let us know your
          requirements today and we shall assist you for web design in Penrith.
        </P>
      </ServiceBottom>
    </Wrap>
  </Layout>
)

export default WebDesignPenrith
