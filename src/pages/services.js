import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import headSeperator from "../images/heading-seperator.png"
import webDesign from "../images/web-design-service.jpg"
import onlineMarketing from "../images/online-marketing.jpg"
import webHosting from "../images/web-email-hosting.jpg"
import eCommerce from "../images/Ecommerce.jpg"
import seoService from "../images/seo-service.jpg"
import contentWrite from "../images/Content-Marketing-Online.jpg"
import socialService from "../images/social-service-mmw.jpg"
import payClick from "../images/ppc.jpg"
import {
  P,
  H1,
  H3,
  Wrap,
  ServiceHead,
  Section,
  Content,
  Image,
} from "../components/serviceComponents"

const ServicePage = () => (
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

      <Section>
        <Image src={webDesign} />
        <Content>
          <H3>Web Design</H3>
          <P>
            The technological wizardry has made it a need to have a presence
            online. The competition is no longer confined to your street, city
            or even nation, it is beyond boundaries. To widen your audience, a
            website is a necessity, rather a good website for that matter. And
            it does not end here, you ought to have a website which is
            user-friendly, informative, attractive and a responsive one.
          </P>

          <P>
            Our experts design the website keeping in mind the needs of your
            business and the expectations of the targeted audience.
          </P>
          <Link to="/web-designing">Read More...</Link>
        </Content>
      </Section>

      <Section>
        <Content>
          <H3>Online Marketing</H3>
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
          <Link to="/online-marketing">Read More...</Link>
        </Content>
        <Image src={onlineMarketing} right />
      </Section>

      <Section>
        <Image src={webHosting} />
        <Content>
          <H3>Web And Email Hosting</H3>
          <P>
            Since the competition is neck and neck, and businesses have so many
            tasks to perform, they are hiring web and email hosting firms for
            their convenience. There is a belief that registering a domain name
            is just enough, to begin with, a website.
          </P>

          <P>
            But, it entirely contradicts with the fact that a domain is just
            like your name, a name to address you. To get a site active and live
            on the internet, hosting a website is of utmost need.
          </P>
          <Link to="/web-and-email-hosting">Read More...</Link>
        </Content>
      </Section>
      <Section>
        <Content>
          <H3>Ecommerce</H3>
          <P>
            Over the years, the usefulness of the internet has augmented
            manifold. The online technology structure has exposed marvelous
            growth which primarily includes the growth of Digital Websites.
            Brick-and-mortar shipping is out of fashion and everyone nowadays
            choose online shopping as the most convenient way. There are several
            companies which have a web presence for trading their products and
            services.
          </P>

          <P>
            If you plan to sell your products with the maximum number of sales
            and profits, having a presence of the same on the web is going to
            help you reach your goal.
          </P>
          <Link to="/ecommerce">Read More...</Link>
        </Content>
        <Image src={eCommerce} right />
      </Section>

      <Section>
        <Image src={seoService} />
        <Content>
          <H3>SEO</H3>
          <P>
            Search Engine Optimization, often known as SEO is one of the main
            marketing channels to endorse website exposure via higher visibility
            in search engines. It is carried out to gain a surge in the website
            traffic. Search Engine Optimization can be performed in two ways.
            Either you can optimize by yourself or hire a search engine
            optimization company for doing it for me.
          </P>

          <P>
            Here, choosing the former option may not be promising enough for
            satisfactory outcomes, while choosing the latter is the best choice
            to get a higher rank for your website on search engines, like
            Google, etcetera.
          </P>
          <Link to="/search-engine-optimisation-seo">Read More...</Link>
        </Content>
      </Section>

      <Section>
        <Content>
          <H3>Content Writing</H3>
          <P>
            At Make My Website, our experts are well acquainted with all the
            tactics of content writing, to educate your audience in an efficient
            manner. Content is one of the most important marketing concepts.
            Relevant and high-quality content engages more users, giving them
            the right information about your product and brand.
          </P>

          <P>
            A good content directly communicates with your online customers. In
            such a scenario, hiring a content writing company can be a boon for
            your business.
          </P>
          <Link to="/content-writing">Read More...</Link>
        </Content>
        <Image src={contentWrite} right />
      </Section>

      <Section>
        <Image src={socialService} />
        <Content>
          <H3>Social Media Marketing</H3>
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
          <Link to="/social-media-marketing">Read More...</Link>
        </Content>
      </Section>

      <Section>
        <Content>
          <H3>Pay Per Click</H3>
          <P>
            If you run a business of your own, you will find unending
            competition. The world is certainly brimming with companies and
            businesses. Most of the businesses these days, have a website to
            attract maximum customers. The best part although is, there are many
            ways to enhance your business online.
          </P>

          <P>
            There are tactics that can fetch you great outcomes. Pay Per Click
            is one such way with which you can monetize your website. Make My
            Website knows how to carry out Pay Per Click and how is it going to
            help you. Whatever time suits you, just contact us and we will more
            than happy to address your queries.
          </P>
          <Link to="/pay-per-click-google-adwords">Read More...</Link>
        </Content>
        <Image src={payClick} right />
      </Section>
    </Wrap>
  </Layout>
)

export default ServicePage
