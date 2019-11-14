import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import headSeperator from "../images/heading-seperator.png"
import webCastleHill from "../images/web-design-castlehill.jpg"
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

const WebDesignCastleHill = () => (
  <Layout>
    <Seo title="Affordable Web Design Castle Hill" />

    <Wrap>
      <ServiceHead>
        <H1>Affordable Web Design Castle Hill</H1>
        <img src={headSeperator} alt="head-seperator" />
        <P>
          Make My Website is an Australian web design agency with clients in
          every single state of the country. We are a small team of experienced
          professionals, that aims to support small, medium and large businesses
          in creating an efficient online presence. Our web designers Castle
          Hill have the required expertise to design websites that are in
          alignment with the industry standards, are fully responsive to all
          devices, and have excellent functionality along with the look and
          feel. If you look at some of our work, you’d know we have done an
          incredible job in terms of web design and development, which is
          evident from the reviews we’ve got from our clients on Google,
          Facebook, OneFlare and Word-of-Mouth.
        </P>
      </ServiceHead>

      <Section>
        <Image src={webCastleHill} />
        <Content>
          <P>
            You will be looking at more than 200 reviews on these platforms,
            which certainly vouches for us for being a reliable and a credible
            web design agency in Australia. If you are looking for quality web
            design Castle Hill, you are at the right place. Being a
            customer-centric company, our focus is on providing 100% client
            satisfaction, as we keep our clients first while everything else
            remains secondary. Website is the face of your business as it
            represents you online.
          </P>

          <P>
            We ensure to provide efficient web design in Castle Hill, to make
            sure it represents your brand in the right manner. In the digital
            era, wherein more than 50% of the internet searches are made through
            mobile phones, it is essential for the website to be responsive to
            all devices. Not only this, the website ought to be SEO friendly
            which allows ethical SEO practices, and Google to crawl the website
            with time. For this very reason, it is important to choose a
            reliable web designer Castle Hill.
          </P>
          <P>
            Therefore, Make My Website is your go-to web design company Castle
            Hill, for quality work and a stunning web design. The websites we
            create are fully optimized, tested, provide great user experience,
            and are checked for speed. We are not limited to any segment, as we
            have created websites from almost every industry. Hence, you may be
            from any of them, you can count on our team at the best web design
            company Castle Hill.
          </P>
        </Content>
      </Section>

      <ServiceBottom>
        <P>
          Also, not only do we create websites which aim to make a difference,
          but we also provide customer support after delivering the projects.
          Once we give you a stunning web design Castle Hill, we make sure to
          have your back whilst you operate it to widen your reach. For small,
          medium, and large businesses like yours, we will be happy to provide
          excellent web design Castle Hills, ongoing support and other services
          to help you succeed online.
        </P>
      </ServiceBottom>
    </Wrap>
  </Layout>
)

export default WebDesignCastleHill
