import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import headSeperator from "../images/heading-seperator.png"
import eCommerce from "../images/woocommerce.jpg"
import {
  Wrap,
  ServiceHead,
  Section,
  Content,
  Image,
  ServiceBottom,
} from "../components/serviceComponents"

const Ecommerce = () => (
  <Layout>
    <Seo title="Ecommerce" />

    <Wrap>
      <ServiceHead>
        <h1>Ecommerce</h1>
        <img src={headSeperator} alt="head-seperator" />
        <p>
          Over the years, the usefulness of the internet has augmented manifold.
          The online technology structure has exposed marvelous growth which
          primarily includes the growth of Digital Websites. Brick-and-mortar
          shipping is out of fashion and everyone nowadays choose online
          shopping as the most convenient way. There are several companies which
          have a web presence for trading their products and services.
        </p>
        <p>
          If you plan to sell your products with the maximum number of sales and
          profits, having a presence of the same on the web is going to help you
          reach your goal. The knowledge and skills of the website developer and
          designer are directly proportioned to the accomplishment of the
          website. For this very reason, companies should rely only on experts
          from an E-commerce Web Designing Firm. This way, you can move forward
          with making the best out of your eCommerce website. If you are looking
          for an E-commerce website agency in Australia, then there is no better
          agency than Make My Website.
        </p>
      </ServiceHead>

      <Section>
        <Image src={eCommerce} />
        <Content>
          <p>
            The expert designers here have extensive experience in this area
            along with all the required skills. The professional website
            designers here are well trained at developing such sites. Their
            assistance would not just augment the quality of the website, but
            also be responsive to your users to give the best shopping
            experience online, through you.
          </p>

          <p>
            If you are unsure of your need to avail professional services, do
            recall the fact that the online world is full of bugs. If you get
            your website built under the guidance of experts, your e-commerce
            website will tend to face lesser bugs and thus minimizing the costs
            for debugging in the future.
          </p>
          <p>
            Also, do take a note that you should always opt for an experienced
            team of web designers to provide what suits best for your business.
            Perhaps, this is the reason that people choose Make My Website to
            get their e-commerce website done.
          </p>
        </Content>
      </Section>

      <ServiceBottom>
        <p>
          Web development is a vast field of various operations which includes
          diverse features like its content, product catalogue widgets,
          promotional system, payment system and many more. Thus, an e-commerce
          designing agency like ours can benefit you with a top-notch website at
          reasonable rates.
        </p>
        <p>
          We assert that we are real professionals who work within the given
          deadlines. We regularly communicate with the concerned people in your
          company to get insights about your business to design a personalized
          e-commerce website for you to sell online in the most effective way.
          Therefore, for experiencing the finest e-commerce services, reach out
          to us. We certainly will not disappoint you.
        </p>
      </ServiceBottom>
    </Wrap>
  </Layout>
)

export default Ecommerce
