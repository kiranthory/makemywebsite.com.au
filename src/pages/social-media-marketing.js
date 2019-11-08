import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import headSeperator from "../images/heading-seperator.png"
import mediaMarketing from "../images/social-media-marketing.jpg"
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

const SocialMediaMarketing = () => (
  <Layout>
    <Seo title="Social Media Marketing" />

    <Wrap>
      <ServiceHead>
        <H1>Social Media Marketing</H1>
        <img src={headSeperator} alt="head-seperator" />
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
          profits and visibility across the globe. We have been able to identify
          the algorithms on social media platforms like Facebook, Twitter,
          Instagram, etcetera to craft our strategies in the best possible
          manner.
        </P>
      </ServiceHead>

      <Section>
        <Image src={mediaMarketing} />
        <Content>
          <P>
            Social Media Experts at Make My Website work towards building your
            brand image on the social media portals to drive the targeted
            traffic towards your business. Using social media smartly is an art,
            and our experts are no less than artists for that matter. We are
            consistent and committed to our work to update your customers with
            the products and services you offer and, promote them whenever
            required on all the social media channels.
          </P>

          <P>
            Our team constantly works on several social media campaigns to
            engage your potential customers and hence uplift your brand image
            throughout the network. Once the customers start finding your
            existence on every social media portal, they will automatically get
            attracted to your products and services.
          </P>
        </Content>
      </Section>

      <ServiceBottom>
        <P>
          Creative posts leave a long-lasting impression on the minds of the
          customers and if such posts come in sight very frequently, we most
          likely tend to get curious about knowing about it well. Now that we
          know how occupied businesses are, we have developed a different team
          of social media enthusiasts who know about social media in and out for
          you to rely on.
        </P>
        <P>
          Whatever field you might be focusing on, it can be well taken care of
          with our marketing tactics. Hence, the team at Make My Website is
          ready to make your business go live on Facebook, Twitter, and
          Instagram, etc.
        </P>
      </ServiceBottom>
    </Wrap>
  </Layout>
)

export default SocialMediaMarketing
