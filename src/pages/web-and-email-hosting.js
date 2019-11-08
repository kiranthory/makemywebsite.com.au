import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import headSeperator from "../images/heading-seperator.png"
import emailHosting from "../images/email-hosting.jpg"
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

const WebAndEmailHosting = () => (
  <Layout>
    <Seo title="Web And Email Hosting" />

    <Wrap>
      <ServiceHead>
        <H1>Web And Email Hosting</H1>
        <img src={headSeperator} alt="head-seperator" />
        <P>
          Since the competition is neck and neck, and businesses have so many
          tasks to perform, they are hiring web and email hosting firms for
          their convenience. There is a belief that registering a domain name is
          just enough, to begin with, a website. But, it entirely contradicts
          with the fact that a domain is just like your name, a name to address
          you. To get a site active and live on the internet, hosting a website
          is of utmost need.
        </P>
        <P>
          If you too are trying to form a website without availing the web
          hosting services, just registering a domain name will serve no
          outcome. Having a web hosting account is essential to get a website
          hosted. Only a web and email hosting company can assist your way
          forward to get accessed by everyone on the web. For all these services
          and responsibilities, you have landed up at the right place. Make My
          Website is known for its Web and Email hosting services.
        </P>
      </ServiceHead>

      <Section>
        <Image src={emailHosting} />
        <Content>
          <H3>What Really Hosting Is?</H3>
          <P>
            Web hosting is the space which you purchase on a web server to store
            your site files. Once you buy a website hosting, you mainly rent
            server space on a server, wherein your web files ought to be placed.
          </P>

          <P>
            Thereafter which, whenever a user will search for your site by
            entering the domain, he will automatically get directed to your
            website. This has been a routine practice for our team of
            professionals for years now. They are acquainted with all the
            related information and are experienced enough to get started with
            hosting space for a business of any kind.
          </P>
          <P>
            Hosting requires efficient and determined work, and once you hire
            Make My Website, you will have a one of a kind experience. We are
            always available for our customers’ queries, keeping in mind the
            importance of tackling a problem at the earliest. Our technical
            support team is extensively working for you only.
          </P>
        </Content>
      </Section>

      <ServiceBottom>
        <P>
          If in case, you host a website by yourself, it would be required for
          you to take care of many technicalities right from machines, software
          and many more. But if you hire an expert agency, it will manage it
          all. From upkeep and repair of servers, it will ensure the functioning
          in a proper manner. All in all, hosting services manage all your work
          without bothering you and since we believe in making the process easy
          and efficient, we provide our best services to you. All you need to do
          is, either, call, message or just walk-in at our office!
        </P>
      </ServiceBottom>
    </Wrap>
  </Layout>
)

export default WebAndEmailHosting
