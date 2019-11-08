import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import headSeperator from "../images/heading-seperator.png"
import webMelbourne from "../images/web-designer-melbourne.jpg"
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

const WebDesignMelbourne = () => (
  <Layout>
    <Seo title="Hire Web Designer Melbourne" />

    <Wrap>
      <ServiceHead>
        <H1>Hire Web Designer Melbourne</H1>
        <img src={headSeperator} alt="head-seperator" />
        <P>
          Make My Website is known for providing high-quality, responsive, and
          professional websites, with over 200 five-star reviews on platforms
          like Google, Facebook, Oneflare, and Word-of-Mouth. We have provided
          Web design in Melbourne for more than 400 clients and continue to add
          more feathers to our hat with our dedication and a team of efficient
          web designers Melbourne. For us, customer satisfaction comes first,
          and we make sure that we carry out web design Melbourne with
          perfection.
        </P>
      </ServiceHead>

      <Section>
        <Image src={webMelbourne} />
        <Content>
          <P>
            Our primary objective is to improve the position of your brand in
            the market, enhance user experience with effective web design in
            Melbourne, as for us, earning money is deemed as secondary. Web
            Designer Melbourne at Make My Website is experienced and specializes
            in creating quality websites with that perfect look and feel. From
            standard websites to highly customized websites, we have an
            appropriate solution for all requirements that you may have. Our
            team is experienced in curating a specific framework for you, to
            have a wider reach on the web and along with other marketing
            services that will help your business stand out of the crowd. A web
            design agency Melbourne like Make My Website is a pioneer in the
            field which is evident from the client testimonials and reviews on
            different portals. We take customer feedback very seriously, along
            with providing top-notch services and can proudly say that we are
            one of the best web design company Melbourne. Website promotes your
            business round the clock, therefore, if you have a professional
            approach towards your business, it’s time to act now!
          </P>

          <P>
            We cater to clients from all over Australia, covering all states and
            territories. Not only this, we are one of the very few web design
            agency Melbourne who has created websites for almost every industry.
            Whatever your business is about, we can give you a high-quality
            website that will be enough to speak for your business. Melbourne
            web design industry has levelled up and professionals at Make My
            Website say that sooner or later, every single business will have a
            website. So why delay your progress when you have a chance to get a
            website designed from the best web design company in Melbourne?
          </P>
        </Content>
      </Section>

      <ServiceBottom>
        <P>
          While our niche is designing stunning websites for small, medium, and
          large businesses, we offer other services too which are required to
          build a strong foundation of your business, and to help you keep going
          & growing. Apart from Melbourne web design, web and email hosting, we
          offer SEO services, content writing services, social media marketing,
          Google Ads, and Pay-Per-Click.
        </P>
        <P>
          Hence, if you are looking to grow your business, or to begin with the
          right approach, don’t hesitate to contact us for all your
          requirements, we are sure to make your experience with us- the best
          website design company in Melbourne. We are proud of being associated
          with and helping hundreds of small businesses in widening their reach
          and can assure you the most efficient service, to keep up with our
          “best website design company in Melbourne” tag.
        </P>
      </ServiceBottom>
    </Wrap>
  </Layout>
)

export default WebDesignMelbourne
