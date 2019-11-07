import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import headSeperator from "../images/heading-seperator.png"
import onlineMarketing from "../images/online-marketing-man-on-computer.jpg"
import {
  Wrap,
  ServiceHead,
  Section,
  Content,
  Image,
  ServiceBottom,
} from "../components/serviceComponents"

const OnlineMarketing = () => (
  <Layout>
    <Seo title="Online Marketing" />

    <Wrap>
      <ServiceHead>
        <h1>Online Marketing</h1>
        <img src={headSeperator} alt="head-seperator" />
        <p>
          Marketing is the backbone of any business and none can shrug off its
          value. This certainly is our competitive advantage. To build a
          rewarding marketing program and maintaining it thereafter, several
          tools exist online. But a few of them are search engine optimization
          campaigns, pay-per-click, banner advertising, email marketing,
          etcetera. These remain different from the conventional marketing
          strategies because the former ones possess the ability to widen the
          reach manifolds, globally.
        </p>
        <p>
          Following the online marketing, you can advertise in a very
          cost-effective manner. You can connect with your targeted audience
          within a nick of the moment, by diverting traffic the right way, for
          example, by free listing in various online business directories.
          Whereas the traditional ways to market the products and services were
          limited to newspapers, magazines, radios or televisions. Hence,
          proving the fact that improvising the customer’s experience online
          through emails, blogs, and many other mediums, is what gives more
          returns than following offline marketing techniques.
        </p>
      </ServiceHead>

      <Section>
        <Image src={onlineMarketing} />
        <Content>
          <p>
            And, if you are already planning to hire an Online Marketing Company
            Blacktown, to enhance your progress, then your search ends here. All
            you need to do is, grab our services and within no time, there will
            be no turning back. Our team of professionals are well informed and
            updated about the current changing trends. The constant trend
            analysis at the backend makes us the leader in the strategic part as
            well.
          </p>

          <p>
            As soon as you team up with our marketing experts, your
            advertisements will get translated into quality traffic. Since our
            team works on curating marketing strategies round the clock, they
            are well familiar about the appropriate strategy that would suit
            your business. For a successful marketing campaign, a lot of
            research and brainstorming is done. To entice maximum viewers, it
            must be well crafted and implemented and this is what our
            professionals do.
          </p>
          <p>
            At Make My Website, our marketing experts carry out thorough
            research about your business before working on it.
          </p>
        </Content>
      </Section>

      <ServiceBottom>
        <p>
          They grab all the required information and even have an intense idea
          about your opponents’ strategies. They examine their campaigns and the
          marketing techniques they follow, to provide you with an altogether
          different and even more efficient marketing strategy which can set the
          stage for you.
        </p>
        <p>
          It is a known fact that to sustain amidst the internet era, online
          marketing is essential. Even if a business performs well without it,
          the level does not seem to maintain its momentum. Maintaining a level
          of growth and increasing it swiftly is significant for any business
          and the factor which influences it the most is Online Marketing.
        </p>
        <p>
          So, if you plan to follow the best method to advertise your company,
          just reach out to us. Always remember, there is an umpteen number of
          online marketing companies and services available but only an
          experienced one can intensify your growth and help you in gaining
          success.
        </p>
      </ServiceBottom>
    </Wrap>
  </Layout>
)

export default OnlineMarketing
