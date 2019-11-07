import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import headSeperator from "../images/heading-seperator.png"
import contentWrite from "../images/content-writing-img.jpg"
import {
  Wrap,
  ServiceHead,
  Section,
  Content,
  Image,
} from "../components/serviceComponents"

const contentWriting = () => (
  <Layout>
    <Seo title="Content Writing" />

    <Wrap>
      <ServiceHead>
        <h1>Content Writing</h1>
        <img src={headSeperator} alt="head-seperator" />
        <p>
          At Make My Website, our experts are well acquainted with all the
          tactics of content writing, to educate your audience in an efficient
          manner. Content is one of the most important marketing concepts.
          Relevant and high-quality content engages more users, giving them the
          right information about your product and brand. A good content
          directly communicates with your online customers.
        </p>
        <p>
          In such a scenario, hiring a content writing company can be a boon for
          your business. You might want to assign this task to one of your
          employees, but certainly, it would be of no use because writing
          effective content requires experience and knowledge. However, content
          writers at Make My Website are result driven and are known for the
          same. They are well versed with the technicalities involved and are
          used to working with time restraints and fulfilling deadlines. Your
          association with our professional content writers will be the one with
          guaranteed satisfaction and on time delivery.
        </p>
      </ServiceHead>

      <Section>
        <Image src={contentWrite} />
        <Content>
          <p>
            We understand that providing services in the desired time frame is
            the most important thing as service providers, and we never let our
            clients fall behind their opponents due to us. We believe in
            perfection and hence we work by understanding the sole purpose of
            content writing, which is getting more traffic on the website, apart
            from providing information and enchanting them. Our content writers
            know how to get your brand to a level where it gets noticed very
            often by creating search engine optimized content.
          </p>

          <p>
            The writers here include relevant keywords in their content for
            attracting possible customers and of course Google, to search your
            website. There is no use of spending a fortune on your website
            design when it is not attracting traffic. At Make My Website, our
            experts are well acquainted with all the tactics of content writing,
            to educate your audience in an efficient manner. To get the desired
            results from your website, do contact us and we would be happy to
            help you.
          </p>
        </Content>
      </Section>
    </Wrap>
  </Layout>
)

export default contentWriting
