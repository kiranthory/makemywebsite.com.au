import React from "react"
import Row from "../components/Row"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import styled from "@emotion/styled"
import Accordion from "../components/Accordion"
const FaqWrap = styled(Row)({})

const Faq = () => (
  <Layout>
    <Seo title="Frequently Asked Questions - Make My Website" />
    <FaqWrap>
      <Accordion title="Hello">
        <p>
          Make My Website specialise in designing, developing and advertising
          websites for small to medium organisations all over Australia. We also
          provide hosting service, domain registration and online marketing
          solutions. We can build outstanding websites for every sort of
          business. We’re pioneers in our industry, giving outstanding services
          and outcome at minimal cost. Websites we build don’t just look
          beautiful, they’re also designed with the goal that you can get the
          most out of your site. Also, once the website is live, we continue to
          work effectively with you to accomplish your business objectives and
          online goals.
        </p>
      </Accordion>
      <Accordion title="Is Make My website a right company for my budget?">
        <p>
          Our websites range start from $599 and can reach to $8,000 or more. It
          completely depends upon the customer requirements. We deliver more
          than what we promised and always exceeded customer expectations. We
          are proud to be the right choice for small to medium businesses. Your
          every dollar is invested to give your business an online presence with
          researches keywords so that your clients can reach you easily. Our
          Prices are always in your budget, MMW offers affordable costs with
          better websites.
        </p>
      </Accordion>
      {/* <ButtonItem>
        What's included in Website build by Make My Website?
      </ButtonItem>
      <AccorionDiv>
        <p>
          Whether you want us to build a new website or rebuild or upgrade the
          existing website, we are happy to assist you. We provide multiple
          design packages that ideally cater to the needs of a wide range of
          small and medium size to enterprise level website design projects.
        </p>
        <p>Our websites include (as per customer requirements) :</p>
        <ul class="faq-list">
          <li>Web pages</li>
          <li>Responsive Designs</li>
          <li>Stock Images</li>
          <li>Smart phone,Call to Action</li>
          <li>Enquiry Form</li>
          <li>Social Media Icons</li>
          <li>Content Upload</li>
          <li>Photo Gallery</li>
          <li>Slider</li>
          <li>On Page SEO</li>
          <li>Custom Form</li>
          <li>Google Map Integration</li>
          <li>Blog</li>
          <li>News Letter Sign Up</li>
          <li>Testimonials</li>
          <li>Upgraded Graphic Buttons with Hover Transitions</li>
          <li>Content Styling and Graphics</li>
          <li>Shopping Cart</li>
          <li>Payment Gateway</li>
          <li>Site Search</li>
          <li>Products</li>
          <li>Client Login</li>
          <li>Product Ratings</li>
        </ul>
      </AccorionDiv>
      <ButtonItem> Where are we based? </ButtonItem>
      <AccorionDiv>
        <p>
          We’re a Melbourne based company, with an office at 129A, Watton
          Street, Werribee, Victoria. We have been catering to clients all over
          Australia as we have our presence in almost every state of Australia,
          including the major cities like Sydney, Brisbane, etcetera. We would
          be more than happy to assist you at our office in Werribee, or else we
          are just a call away to create your dream website.
        </p>
      </AccorionDiv>
      <ButtonItem> Do MMW build all the websites on WordPress?</ButtonItem>

      <ButtonItem>
        Is it possible to make changes once the website is live?{" "}
      </ButtonItem>

      <ButtonItem> Do you design Logo too? Is Logo Important?</ButtonItem>

      <ButtonItem> What are MMW payment plans? </ButtonItem>

      <ButtonItem> Can you Upgrade/re-build my existing website?</ButtonItem>

      <ButtonItem> Is it necessary to host a website with MMW?</ButtonItem>

      <ButtonItem>
        {" "}
        How my website will rank higher on Google and all other search engines?
        Is SEO important?{" "}
      </ButtonItem> */}
    </FaqWrap>
  </Layout>
)

export default Faq
