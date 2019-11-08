import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import headSeperator from "../images/heading-seperator.png"
import webBlacktown from "../images/web-design-blacktown.jpg"
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

const WebDesignBlacktown = () => (
  <Layout>
    <Seo title="Top Web Design Blacktown" />

    <Wrap>
      <ServiceHead>
        <H1>Top Web Design Blacktown</H1>
        <img src={headSeperator} alt="head-seperator" />
        <P>
          Make My Website is established with the vision of providing enormous
          support to small, medium, and large businesses and engage our best
          team of web designers Blacktown to create stunning websites for all
          our clients. Our cornerstone lies in providing excellent customer
          satisfaction through our expert services and that is the reason we
          have so many happy clients sharing their feedback on Google, Facebook,
          OneFlare and Word-of-Mouth.
        </P>
      </ServiceHead>

      <Section>
        <Image src={webBlacktown} />
        <Content>
          <P>
            No wonder our team is all about creativity and that is visible from
            the kind of web design Blacktown we offer. Our goal is to enhance
            your business as we go by your business model to create the face of
            your business that speaks volumes about the same, thereby providing
            efficient web design in Blacktown. Often our clients ask us about
            the benefits of having a website, wherein we always tell them one
            thing- it is the internet advertising billboard for you and your
            company. Choose a professional web designer Blacktown and you are
            good to go.
          </P>

          <P>
            From the beginning, we have been able to maintain our standards of
            service and quality. We are a small team of passionate designers
            that leaves no stone unturned to help as many businesses as possible
            and hence, be called as the most efficient web design company
            Blacktown.
          </P>
          <P>
            As soon as nay visitor from web will redirect to your website, they
            will experience that look and feel we give to your website. As a web
            design company Blacktown, it is our responsibility to ensure speed,
            optimized pages, and the entire user experience on your website.
          </P>
        </Content>
      </Section>

      <ServiceBottom>
        <P>
          With creating websites for businesses of every niche, we have a
          detailed understanding of all segments, and we know how to shape up
          the website and give you a stunning web design Blacktown. A team of
          passionate, and great learners has come together to stay updated on
          the technology and use our creative head to give it a real form. Our
          creative approach has given us numerous clients, hundreds of reviews
          and an opportunity to connect with the community whilst providing Web
          design Blacktown. Hence, if you are a business wanting to have a
          professional website, let us know your requirements today and we will
          be happy to help you for with stunning web design in Blacktown.
        </P>
      </ServiceBottom>
    </Wrap>
  </Layout>
)

export default WebDesignBlacktown
