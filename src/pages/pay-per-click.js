import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import headSeperator from "../images/heading-seperator.png"
import payClick from "../images/payper-click.jpg"
import {
  P,
  H1,
  Wrap,
  ServiceHead,
  Section,
  Content,
  Image,
} from "../components/serviceComponents"

const PayPerClick = () => (
  <Layout>
    <Seo title="Pay Per Click" />

    <Wrap>
      <ServiceHead>
        <H1>Pay Per Click</H1>
        <img src={headSeperator} alt="head-seperator" />
        <P>
          If you run a business of your own, you will find unending competition.
          The world is certainly brimming with companies and businesses. Most of
          the businesses these days, have a website to attract maximum
          customers. The best part although is, there are many ways to enhance
          your business online.
        </P>
        <P>
          There are tactics that can fetch you great outcomes. Pay Per Click is
          one such way with which you can monetize your website. Make My Website
          knows how to carry out Pay Per Click and how is it going to help you.
          Whatever time suits you, just contact us and we will more than happy
          to address your queries.
        </P>
      </ServiceHead>

      <Section>
        <Image src={payClick} />
        <Content>
          <P>
            Pay Per Click advertising has the power to transport targeted
            traffic, only after doing it the right way with proper technical
            knowledge. Even the marketing experts can make errors when they
            begin to sell a new product with the help of PPC. It requires an
            expert and a professional PPC Analyst for reviewing every probable
            facet of your business. If you associate with us, you will be able
            to witness spontaneous results. Else, the whole concept of PPC can
            leave you perplexed. Also, to give your business the right exposure,
            such marketing tools lay a strong foundation.
          </P>

          <P>
            For a successful PPC service, keyword research is critical. This is
            what our experts spend most of their time on: searching the right
            keywords. If in case the wrong keywords are chosen, the campaign
            flops in no time. Hence, our team at Make My Website is available
            all the time for you to expand the horizon of your business. Whether
            you want Google AdWords or Pay Per Click, we are just a text/call
            away.
          </P>
        </Content>
      </Section>
    </Wrap>
  </Layout>
)

export default PayPerClick
