import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import headSeperator from "../images/heading-seperator.png"
import webGeelong from "../images/web-design-geelong.jpg"
import {
  P,
  H1,
  H3,
  Wrap,
  ServiceHead,
  Section,
  Content,
  Image,
  ServiceBottom,
} from "../components/serviceComponents"

const WebEmarketing = () => (
  <Layout>
    <Seo title="About Emarketing" />

    <Wrap>
      <ServiceHead>
        <H1>About Emarketing</H1>
        <img src={headSeperator} alt="head-seperator" />
        <P>
          Emarketing is any marketing done online through website or other
          Equipments and resources.E-Marketing are also known as the Web
          Marketing,Internet Marketing, Digital Marketing, or Online Marketing.
        </P>
        <P>
          It can include paid services while other methods are almost free. A
          large variety of this methods are in your disposal, including: direct
          email, SMS/text messages, blogs, webpages, banners, videos, images,
          ads, mass media, search engines like google, and much, much more.
        </P>
      </ServiceHead>

      <Section>
        <Image src={webGeelong} />
        <Content>
          <P>
            Sur internet is the process of marketing an item or service using
            the Internet. This does not only includes marketing on the Net, but
            also includes marketing done via e-mail and wireless media. .It uses
            a range of technology to help connect businesses to their customers.
          </P>
          <H3>Why EMarketing?</H3>

          <P>
            The “why” of eMarketing is equivalent to for marketing generally
            speaking through traditional methods – to produce brand
            understanding for your small business and products also to
            communicate to your target markets that you have products of benefit
            and value that folks need. The ultimate goal is to draw customers to
            buy your products. eMarketing uses techniques that are unique to the
            medium of the Internet, which has get a huge route for reaching your
            potential customers and an |important part of your overall marketing
            efforts. Moreover, online marketing is usually much lower cost and
            more effective in reaching large people than many traditional paid
            for advertising methods.
          </P>
        </Content>
      </Section>

      <ServiceBottom>
        <P>
          If you sell products online or not, it is essential for almost every
          business. Online marketing permits you to cost-effectively goal your
          markets with structured campaigns and messaging to optimize
          conversions to sales – something very costly and difficult through
          mass market media techniques. There are lots of online marketing
          methods defined on these pages and, generally, every business should
          use several of these methods to reach your target markets effectively.
        </P>
      </ServiceBottom>
    </Wrap>
  </Layout>
)

export default WebEmarketing
