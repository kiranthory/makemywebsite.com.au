import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import headSeperator from "../images/heading-seperator.png"
import webDesign from "../images/programmers-cooperating.jpg"
import webProfessional from "../images/developer-team.jpg"
import {
  P,
  H1,
  H3,
  Wrap,
  ServiceHead,
  Section,
  Content,
  Image,
  List,
  Item,
} from "../components/serviceComponents"

const WebDesign = () => (
  <Layout>
    <Seo title="Web Design" />

    <Wrap>
      <ServiceHead>
        <H1>Web Design</H1>
        <img src={headSeperator} alt="head-seperator" />
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
      </ServiceHead>

      <Section>
        <Image src={webDesign} />
        <Content>
          <P>
            The interpersonal communication among our team and the client enable
            us to design personalized websites. We entirely rely on customer
            satisfaction and hence this is what makes us unique in this era of
            competition. The design along with the way, the information is
            presented on a website, paints an exact picture of the business
            through a transition of knowledge and graphics in the user’s mind.
          </P>

          <P>
            The data and the content which exactly relate to the business idea,
            certainly leave an eternal impression on the viewers, and for that,
            only a professional and well-recognized group of expert designers
            can provide a rich and profitable experience.
          </P>
          <P>
            Be it the headlines, columns, buttons, bars or other features, our
            specialists know it all. Even the minute details are seriously taken
            care of, including the arrangement of the information which is to be
            imparted, accommodating everything in the most presentable manner
            and considering the easy accessibility for the visitors on priority.
          </P>
          <P>
            The layout of the pages should be in a proper manner with just
            relevant information. Thus, for the best web designing service, you
            can entirely and completely count on us. Talk to our experts about
            it and witness the elevation in the graph of your success.
          </P>
        </Content>
      </Section>

      <ServiceHead>
        <H1>Website design for professionals</H1>
        <img src={headSeperator} alt="head-seperatot" />
        <P>
          Make My Website is a digital agency made up of really talented
          individuals. We are a small team who is willing to work your way to
          help you succeed online. Here at Make My Website, we love our work and
          highly rely on customer satisfaction. We love making websites and make
          them work for our clients. There isn’t anything we can’t do, but if
          there is, we are very upfront, so that you won’t waste your time and
          money. For us nothing is big or small we take projects just not to add
          revenue to our table as we believe in learning from each and every
          project.
        </P>
        <P>
          At Make My Website, we are very creative and thinking people that what
          makes us different. You can view our All Services we provide.
        </P>
      </ServiceHead>

      <Section>
        <Content>
          <List>
            <Item>
              We are a group of highly professionals who work with you for your
              online business presence.
            </Item>
            <Item>
              We are dedicated to meet any goals and guidelines to deliver your
              project.
            </Item>
            <Item>
              We are just one phone call away to make your dream come true.
            </Item>
            <Item>We have a dedicated team based in Sydney and Melbourne.</Item>
            <Item>We cater clients all over Australia.</Item>
          </List>
          <P>
            Our company is a tiny business web design company striving to create
            just the right website for every single client. We can help you have
            the website that won’t only look great but concentrate on both you
            and your target audience.
          </P>
          <P>
            All of us have been in business for ten years, and our clients know
            they can trust us for quality work and excellent support. Your goals
            are important to us, and we work with you to create the perfect
            design for each and every need.
          </P>
        </Content>
        <Image src={webProfessional} right />
      </Section>
      <ServiceHead>
        <H3>
          Why having a website is important for small, medium and large
          businesses?
        </H3>
        <img src={headSeperator} alt="head-seperatot" />
        <P>
          Having a website for all sorts of business is important, be it for
          small businesses, medium businesses, large-scale businesses, sole
          traders or tradies. Your existence on the web is what makes your brand
          visible globally. A professional website plays an important role in
          expanding your reach throughout. It passes on relevant information to
          customers, potential employees and even investors. If you run a small
          or a medium business, then having a website of your own eventually
          gives hefty returns. The products and services you offer get noticed
          by large audiences and hence you get an opportunity to grow in your
          field.
        </P>
        <P>
          Considering large businesses already making huge profits out of their
          established businesses, it is even more essential for them to have a
          web presence, without which they certainly, do not exist. Because,
          undoubtedly, brand image is of the highest significance. Also, once a
          website is developed, the confinement within a limited set of
          customers gets over.
        </P>
      </ServiceHead>

      <Section>
        <Content>
          <P>
            Sole Traders and Tradies, who provide their services ought to have
            their personalized website to connect with the targeted audience,
            offer quality services and makeup to a great global presence through
            the web. We design websites across Australia and offer quality
            services at affordable prices.
          </P>
          <P>
            <b>Following are the outcomes of having your own website:</b>
          </P>
          <List>
            <Item>It gives an edge to your business</Item>
            <Item>
              Enables you to deal with your projects through your websites if
              all your functioning in online
            </Item>
            <Item>
              It is the best platform to advertise yourself and increases your
              reach manifolds
            </Item>
            <Item>
              Allows you to get extensive feedback from the customers for your
              betterment
            </Item>
            <Item>Gives you a global presence</Item>
          </List>
        </Content>
        <Image src={webProfessional} right />
      </Section>
    </Wrap>
  </Layout>
)

export default WebDesign
