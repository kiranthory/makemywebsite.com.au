import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import headSeperator from "../images/heading-seperator.png"
import webGeelong from "../images/web-design-geelong.jpg"
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

const WebDesignGeelong = () => (
  <Layout>
    <Seo title="Quality Web Design Geelong" />

    <Wrap>
      <ServiceHead>
        <H1>Quality Web Design Geelong</H1>
        <img src={headSeperator} alt="head-seperator" />
        <P>
          Make My Website is a 5-star rated web design agency based in
          Australia, with a focus on catering to web design needs of business in
          every single state of the country. We are a team of expert web
          designers Geelong who are keen to help your business expand its
          horizon and make the most of a thing called “web”. Our areas of
          service include designing stunning websites and providing other web
          solutions which you’d require while setting up your identity online.
        </P>
      </ServiceHead>

      <Section>
        <Image src={webGeelong} />
        <Content>
          <P>
            As an expert in this field, we often get a common question that if
            getting a website for business was a necessity, and our answer to
            this is that most of the world is online most of the times, its on
            you to choose if you want to reach out to the potential customers in
            an effective manner or not. Therefore, avail quality web design
            Geelong from a reputed web design company and be assured of the
            quality and service delivered to you.
          </P>

          <P>
            If you have a look at our portfolio, you will see hundreds of
            websites designed by our best web designer Geelong for clients from
            every industry- as we have always worked in a diverse manner, and
            certainly have the necessary knowledge to cater to clients from all
            of industries in terms of web design in Geelong.
          </P>
          <P>
            Considering the competition in every industry, we lay emphasis on
            making sure that the website is SEO-friendly, whilst we optimize all
            the pages, complete responsive and speed testing, and finally go
            live with a stunning functionality. Therefore, we are known as an
            efficient web design company Geelong. Our works speaks volumes for
            us, which is to be vouched for from the hundreds of 5-star reviews
            we have got from our clients on platforms like Google, Facebook,
            Oneflare, and Word-of-mouth.
          </P>
        </Content>
      </Section>

      <ServiceBottom>
        <P>
          As an expert web design company Geelong that has designed and
          developed over 400 websites in such a short span of time, we can
          provide complete web solutions for your business, be it
          content-writing or SEO, social media marketing or Google AdWords, we
          cater to it all. Hence, if you choose us for providing you with web
          design Geelong, we will make sure all your requirements are met and we
          would certainly exceed your expectations. We will be happy to create
          your presence online, all you need to do is contact us and we shall
          help you out with efficient web design in Geelong.
        </P>
      </ServiceBottom>
    </Wrap>
  </Layout>
)

export default WebDesignGeelong
