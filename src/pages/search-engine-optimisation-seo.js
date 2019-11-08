import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import headSeperator from "../images/heading-seperator.png"
import searchEngine from "../images/search-engine.jpg"
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

const searchEngineOptimisation = () => (
  <Layout>
    <Seo title="Search Engine Optimisation" />

    <Wrap>
      <ServiceHead>
        <H1>SEO</H1>
        <img src={headSeperator} alt="head-seperator" />
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
      </ServiceHead>

      <Section>
        <Image src={searchEngine} />
        <Content>
          <P>
            You ought to team up with Make My Website, to get the best search
            engine optimization services delivered by us. Our search engine
            specialists have a much better understanding of the algorithms with
            which they function and over the years, they have made the most out
            of their knowledge. The nature of search engine procedures needs to
            be understood well to draft the strategies for improving your
            website’s ranking on search engines online. Nevertheless, you can do
            it by yourself but only with extensive in-depth research on how
            search engines perform and how the sites get rank, which makes it
            nothing more than just a time-consuming process.
          </P>

          <P>
            However, with a team of SEO experts at Make My Website, a lot of
            your time and energy can be saved. Considering that the functioning
            of business needs commitment towards many aspects, you might not be
            able to fulfil your SEO endeavours. In this scenario, if you see us
            stepping in, things can get much more convenient and productive for
            you. Our team will take up the entire responsibility to get a higher
            rank for your website. All the concerns related to marketing,
            ranking and optimization concerns will be tackled by the SEO
            experts.
          </P>
        </Content>
      </Section>

      <ServiceBottom>
        <P>
          Years of experience and passion has made our experts well trained in
          this area. They are aware of all the nitty-gritty of this field. Apart
          from developing SEO strategies for you, our team keeps an open eye
          throughout the online market and monitors the SEO tactics being used
          by your competitors as well, to make you stand out.
        </P>
        <P>
          Hence, if you are looking for effective SEO services that have worked
          wonders for our previous clients in Australia, then you are already in
          the right place.
        </P>
      </ServiceBottom>
    </Wrap>
  </Layout>
)

export default searchEngineOptimisation
