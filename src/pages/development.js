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

const WebDevelopment = () => (
  <Layout>
    <Seo title="Web Development" />

    <Wrap>
      <ServiceHead>
        <H1>Web Development</H1>
        <img src={headSeperator} alt="head-seperator" />
        <P>
          Among web professionals, web development usually refers to the main
          non-design aspects of building web sites: writing markup and coding.
          Most recently Web development has come to mean the creation of content
          management systems or CMS.
        </P>
        <P>
          Since the commercialization of the World Wide Web, internet lifestyle
          has been a bursting forth industry. The accomplishment of this trading
          is over driven by businesses wishing to handle their website to deny
          products and services to customers.
        </P>
      </ServiceHead>

      <Section>
        <Image src={webGeelong} />
        <Content>
          <P>
            There is unmask source software for internet habit savor BerkeleyDB,
            GlassFish, LAMP (Linux, Apache, MySQL, PHP) jumble and Perl/Plack.
            This has limited the charge of book discipline internet knowledge to
            a minimum. Another contributing foundation to the accomplishment of
            the manufacturing has been the appear of easy-to-use WYSIWYG
            web-development software, one as Adobe Dreamweaver, BlueGriffon and
            Microsoft Visual Studio. Knowledge of HyperText Markup Language
            (HTML) or of programming humanistic discipline is too required to
            evaluate one software, nonetheless the basics bouncecel be learned
            and implemented short mutually the threw in one lot with of threw in
            one lot with files, mechanical books, web tutorials, or face-to-face
            training.
          </P>

          <P>
            An too growing reside of tools and technologies have helped
            developers build preferably dynamic and interactive websites.
            Further, World Wide Web developers forthwith help to read
            applications as web services which were traditionally solo available
            as applications on a desk-based computer. This has recognize large
            amount opportunities to decentralize taste and electronic
            broadcasting distribution. Examples boot be seen mutually the fall
            in to place of dim services one as Adobe Creative Cloud, Dropbox and
            Google Docs. These web services had the means for users to interact
            by the whole of applications from large amount locations, rather of
            as a result of tied to a unwavering workstation for their review
            environment.
          </P>
        </Content>
      </Section>

      <ServiceBottom>
        <P>
          Examples of dramatic break by the whole of the past in parcel and
          business led by web knowledge include e-commerce. Online auction-sites
          one as eBay have transferred the fashion consumers clash and purchase
          chapter and verse and services. Online retailers a well known as
          Amazon.com and Buy.com (among profuse others) have transformed the
          home and bargain-hunting hurt for many consumers. Another helpful
          example of transformative parcel led by web society is the blog. Web
          applications a well known as WordPress and Movable Type have created
          plainly implemented blog-environments for companionless web sites. The
          currency of open-source cheerful management systems one as Joomla!,
          Drupal, XOOPS, and TYPO3 and enterprise easygoing management systems a
          well known as Alfresco and eXo Platform have regular web development’s
          effort at online interaction and communication.
        </P>
        <P>
          Web development has further impacted mortal networking and marketing.
          Websites are no longer seldom tools for what one is in to or for balls
          in air, but perform preferably broadly for package and urban
          networking. Websites such as Facebook and Twitter grant users with a
          statement of belief to talk one leg off and organizations with a more
          personal and interactive by the number to am a party to the public.
        </P>
      </ServiceBottom>
    </Wrap>
  </Layout>
)

export default WebDevelopment
