import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import {
  P,
  H1,
  H3,
  Wrap,
  ServiceHead,
  Section,
  Content,
  BgWrap,
} from "../components/serviceComponents"
import headSeperator from "../images/heading-seperator.png"

export const serviceImage = graphql`
  fragment serviceImage on File {
    childImageSharp {
      fluid(maxWidth: 570) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

const ServicePage = () => {
  const data = useStaticQuery(graphql`
    query {
      webDesign: file(relativePath: { eq: "web-design-service.jpg" }) {
        ...serviceImage
      }
      onlineMarketing: file(relativePath: { eq: "online-marketing.jpg" }) {
        ...serviceImage
      }
      webHosting: file(relativePath: { eq: "web-email-hosting.jpg" }) {
        ...serviceImage
      }
      eCommerce: file(relativePath: { eq: "Ecommerce.jpg" }) {
        ...serviceImage
      }
      seoService: file(relativePath: { eq: "seo-service.jpg" }) {
        ...serviceImage
      }
      contentWrite: file(relativePath: { eq: "Content-Marketing-Online.jpg" }) {
        ...serviceImage
      }
      socialService: file(relativePath: { eq: "social-service-mmw.jpg" }) {
        ...serviceImage
      }
      payClick: file(relativePath: { eq: "ppc.jpg" }) {
        ...serviceImage
      }
    }
  `)

  //console.log("data", data)

  const serviceLinks = [
    [
      "Web Design",
      "/web-designing",
      data.webDesign,
      <>
        <P>
          The technological wizardry has made it a need to have a presence
          online. The competition is no longer confined to your street, city or
          even nation, it is beyond boundaries. To widen your audience, a
          website is a necessity, rather a good website for that matter. And it
          does not end here, you ought to have a website which is user-friendly,
          informative, attractive and a responsive one.
        </P>

        <P>
          Our experts design the website keeping in mind the needs of your
          business and the expectations of the targeted audience.
        </P>
      </>,
    ],
    [
      "Online Marketing",
      "/online-marketing",
      data.onlineMarketing,
      <>
        <P>
          Marketing is the backbone of any business and none can shrug off its
          value. This certainly is our competitive advantage. To build a
          rewarding marketing program and maintaining it thereafter, several
          tools exist online. But a few of them are search engine optimization
          campaigns, pay-per-click, banner advertising, email marketing,
          etcetera.
        </P>

        <P>
          These remain different from the conventional marketing strategies
          because the former ones possess the ability to widen the reach
          manifolds, globally.
        </P>
      </>,
    ],
    [
      "Web And Email Hosting",
      "/web-and-email-hosting",
      data.webHosting,
      <>
        <P>
          Since the competition is neck and neck, and businesses have so many
          tasks to perform, they are hiring web and email hosting firms for
          their convenience. There is a belief that registering a domain name is
          just enough, to begin with, a website.
        </P>

        <P>
          But, it entirely contradicts with the fact that a domain is just like
          your name, a name to address you. To get a site active and live on the
          internet, hosting a website is of utmost need.
        </P>
      </>,
    ],
    [
      "Ecommerce",
      "/ecommerce",
      data.eCommerce,
      <>
        <P>
          Over the years, the usefulness of the internet has augmented manifold.
          The online technology structure has exposed marvelous growth which
          primarily includes the growth of Digital Websites. Brick-and-mortar
          shipping is out of fashion and everyone nowadays choose online
          shopping as the most convenient way. There are several companies which
          have a web presence for trading their products and services.
        </P>

        <P>
          If you plan to sell your products with the maximum number of sales and
          profits, having a presence of the same on the web is going to help you
          reach your goal.
        </P>
      </>,
    ],
    [
      "SEO",
      "/search-engine-optimisation-seo",
      data.seoService,
      <>
        <P>
          Search Engine Optimization, often known as SEO is one of the main
          marketing channels to endorse website exposure via higher visibility
          in search engines. It is carried out to gain a surge in the website
          traffic. Search Engine Optimization can be performed in two ways.
          Either you can optimize by yourself or hire a search engine
          optimization company for doing it for me. Here, choosing the former
          option may not be promising enough for satisfactory outcomes, while
          choosing the latter is the best choice to get a higher rank for your
          website on search engines, like Google, etcetera.
        </P>
      </>,
    ],

    [
      "Content Writing",
      "/search-engine-optimisation-seo",
      data.contentWrite,
      <>
        <P>
          At Make My Website, our experts are well acquainted with all the
          tactics of content writing, to educate your audience in an efficient
          manner. Content is one of the most important marketing concepts.
          Relevant and high-quality content engages more users, giving them the
          right information about your product and brand.
        </P>

        <P>
          A good content directly communicates with your online customers. In
          such a scenario, hiring a content writing company can be a boon for
          your business.
        </P>
      </>,
    ],
    [
      "Social Media Marketing",
      "/social-media-marketing",
      data.socialService,
      <>
        <P>
          No matter what you sell and who is your buyer, making use of social
          media as a marketing device can prove very helpful for growing your
          brand. Globally, social media is one of the fastest growing
          industries. And, to increase your brand’s reach and visibility, you
          ought to make the most out of it.
        </P>

        <P>
          Social Media is the best way to communicate with your potential
          customers and building healthy relationships with them. Use of
          extensive social media marketing strategies has led to enormous
          profits and visibility across the globe.
        </P>
      </>,
    ],
    [
      "Pay Per Click",
      "/pay-per-click-google-adwords",
      data.payClick,
      <>
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
      </>,
    ],
  ]

  return (
    <Layout>
      <Seo title="Services" />

      <Wrap>
        <ServiceHead>
          <H1>Our Services</H1>
          <img src={headSeperator} alt="head-seperator" />
          <P>
            Elevate Your Businesses Capabilities With One Step. We offer a wide
            variety of website design services.
          </P>
        </ServiceHead>

        {serviceLinks.map(([title, link, image, content], index) => {
          const flipped = index % 2 === 0
          const img = (
            <BgWrap>
              <Img
                fluid={image.childImageSharp.fluid}
                css={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </BgWrap>
          )
          const cnt = (
            <Content>
              <H3>{title}</H3>
              {content}
              <Link to={link}>Read More...</Link>
            </Content>
          )
          return (
            <Section key={index}>
              {flipped ? (
                <>
                  {img}
                  {cnt}
                </>
              ) : (
                <>
                  {cnt}
                  {img}
                </>
              )}
            </Section>
          )
        })}
      </Wrap>
    </Layout>
  )
}

export default ServicePage
