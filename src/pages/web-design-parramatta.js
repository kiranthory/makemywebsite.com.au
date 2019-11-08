import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import headSeperator from "../images/heading-seperator.png"
import webParamatta from "../images/web-design-paramatta.jpg"
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

const WebDesignParramatta = () => (
  <Layout>
    <Seo title="Professional Web Design Parramatta" />

    <Wrap>
      <ServiceHead>
        <H1>Professional Web Design Parramatta</H1>
        <img src={headSeperator} alt="head-seperator" />
        <P>
          Make My Website is a team of efficient web designers Parramatta, that
          offers only high-quality and professional websites. We have more than
          200 five-star reviews from our clients who have always accorded us for
          our stunning work. We have designed over 400 websites, and our
          clientele is in every single state of Australia. That’s the reason we
          are one of the renowned designers in the industry of web design
          Parramatta. Our focus is on providing the best service, value for
          money, and excellent customer support like no other company providing
          web design in Parramatta.
        </P>
      </ServiceHead>

      <Section>
        <Image src={webParamatta} />
        <Content>
          <P>
            Having a website lays a strong foundation of your business and there
            is no denying the fact that a website for your business acts as an
            employee who markets you 24/7/365. Considering the opportunity cost,
            we always urge our readers and clients to opt for an appropriate web
            designer Parramatta for sure results.
          </P>

          <P>
            We are a team of trained professionals offering web design and
            development services, and we have something for everyone! Right from
            small businesses to medium and large businesses, we cater to them
            all. Make My Website has been consistent with quality right day one,
            and that is why our existing clients believe that our web design
            company Parramatta is A1 since day 1!
          </P>
          <P>
            When we design websites, we ensure that it alone portrays your
            business and gives an excellent user experience- which urges them to
            stick to the website to find out more about your services. As a
            business you would be looking at reaching out to a wider audience,
            and there’s certainly no way better than getting a website done from
            Make My Website, a web design company Parramatta. We are experienced
            in creating websites in almost every industry. Whatever business you
            may have, we are aware of the technicalities involved in the look
            and feel of the website because we know it is the face of your
            business in this digital world.
          </P>
        </Content>
      </Section>

      <ServiceBottom>
        <P>
          Web design Parramatta has evolved like no other industry, yet our
          expert designers take notes of the inevitable changes in technology
          therefore, providing only high-tech and updated solutions to all our
          clients. So, if you have a professional approach towards your
          business, are establishing it from scratch, or re-modelling it for
          good, a website is the best investment you would make making sure that
          you associate with proficient web designers at Make My Website for
          best results of web design in Parramatta.
        </P>
      </ServiceBottom>
    </Wrap>
  </Layout>
)

export default WebDesignParramatta
