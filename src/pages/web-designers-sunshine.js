import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import headSeperator from "../images/heading-seperator.png"
import webSunshine from "../images/designer-sunshine.jpg"
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

const WebDesignSunshine = () => (
  <Layout>
    <Seo title="Expert Web Designers Sunshine" />

    <Wrap>
      <ServiceHead>
        <H1>Expert Web Designers Sunshine</H1>
        <img src={headSeperator} alt="head-seperator" />
        <P>
          In this era of technological advancement, little did we know there
          would be so much dependence on the internet for every minute thing in
          our lives! This is the time when the need for businesses to go online
          arises. Currently, with most of the population surfing internet for
          information, making decisions, availing services, or buying products,
          it is important to have a website.
        </P>
      </ServiceHead>

      <Section>
        <Image src={webSunshine} />
        <Content>
          <P>
            We at Make My Website, are a team of expert web designers Sunshine
            Coast who aim at supporting small, medium and large businesses
            whilst they utilize the opportunity to reach more people and have a
            professional identity on the web. We are a web design company
            Sunshine Coast that focuses on delivering quality services along
            with an ongoing customer support service, that helps our clients to
            establish and make the most of their websites.
          </P>

          <P>
            It is essential to choose quality web design Sunshine Coast
            considering that search engines like Google do not even crawl and
            rank websites which are of poor quality- are highly irresponsive or
            take too much time to load. At Make My Website, our best web
            designers Sunshine Coast take care of the nitty-gritty of the
            website and ensure proper functionality along with the look and feel
            of the site. We can vouch on the fact that we offer the most
            efficient web design in Sunshine Coast.
          </P>
          <P>
            Our emphasis while designing and developing websites is on making it
            easy to navigation, provide great user experience, and make it
            SEO-friendly for Google to crawl it easily.
          </P>
        </Content>
      </Section>

      <ServiceBottom>
        <P>
          We are a well-known web design company Sunshine Coast, known for our
          work and quality of service. We have designed and developed more than
          400 websites and hence, as an expert web design company Sunshine Coast
          we provide complete web solutions for your small, medium, or large
          business. If you choose us web design Sunshine Coast, we will make
          sure all your design requirements are met. We will surely create your
          online presence, just contact us and we will help you out with a
          stunning web design in Sunshine Coast.
        </P>
      </ServiceBottom>
    </Wrap>
  </Layout>
)

export default WebDesignSunshine
