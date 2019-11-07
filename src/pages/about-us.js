import React from "react"
import styled from "@emotion/styled"
import Row from "../components/Row"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import headSeperator from "../imgs/heading-seperator.png"
import mmwAbout from "../imgs/mmw-about.jpg"
import webBusiness from "../imgs/responsive-design.png"
import customerSatisfaction from "../imgs/customer-satisfaction.png"
import businessSuccess from "../imgs/business-growth.png"
import businessSep from "../imgs/business-bottom.jpg"
import webDeveloper from "../imgs/web-developer.jpg"

const Wrap = styled.div({
  p: {
    lineHeight: "28px",
    marginTop: "0px",
    marginBottom: "15px",
  },

  h3: {
    fontSize: "30px",
    marginTop: "0px",
    lineHeight: "40px",
    marginBottom: "10px",
  },

  h1: {
    fontSize: "50px",
    marginBottom: "20px",
    fontWeight: 700,
    fontFamily: "Roboto",
    marginTop: "0px",
  },
})

const ServiceHead = styled(Row)({
  textAlign: "center",
  img: {
    paddingBottom: "30px",
  },
})

const WeMakeWebsites = styled(Row)({
  textAlign: "center",
  paddingTop: "80px",
  img: {
    paddingBottom: "30px",
  },

  h6: {
    fontSize: "20px",
    lineHeight: "35px",
    margin: "0px 0px 30px",
  },
})

const img = styled.img({
  margin: "auto",
  display: "block",
})

const Button = styled.button({
  background: "#ED1D25",
  color: "#fff",
  padding: "10px 20px",
  border: "0px",
  lineHeight: "20px",
})

const Item = styled.div({
  flex: "1 1 33%",
  padding: "10px 20px",
})

const OurStory = styled(Row)({
  paddingTop: "80px",
})

const Left = styled.img({
  flex: "1 1 50%",
})
const Right = styled.div({
  flex: `1 1 50%`,
  maxWidth: `50%`,
})

const img = ({ ...props }) => (
  <BgWrap>
    <Bg {...props} />
  </BgWrap>
)

const AboutUs = () => (
  <Layout>
    <Seo title="About Us" />

    <Wrap>
      <ServiceHead>
        <h1>About Us</h1>
        <img src={headSeperator} alt="head-seperator" />
        <p>
          <b>We Don’t Just Build Websites, We Build Your Online Business!</b>
        </p>
        <p>
          At Make My Website, we are a group of highly trained and skilled
          professionals who work with you to create your online presence and are
          dedicated to meet the goals and guidelines to deliver your project.
        </p>
        <p>
          Our Office is located in the center of Werribee. However, we are
          physically present in Sydney, Melbourne, and Brisbane with clients all
          over Australia. We are just one phone call away to give your business
          an online presence.
        </p>
        <img src={mmwAbout} />
        <Button>Contact Us</Button>
      </ServiceHead>

      <WeMakeWebsites>
        <h1>We Make Websites</h1>
        <img src={headSeperator} alt="head-seperator" />
        <Item>
          <img src={webBusiness} />
          <h6>Websites Which Stands Out For Your Business</h6>
          <img src={businessSep} />
        </Item>
        <Item>
          <img src={customerSatisfaction} />
          <h6>We Endeavour To Provide The Best Customer Satisfaction</h6>
          <img src={businessSep} />
        </Item>
        <Item>
          <img src={businessSuccess} />
          <h6>It’s All About Making Your Business Successful</h6>
          <img src={businessSep} />
        </Item>
      </WeMakeWebsites>
      <OurStory>
        <h1>Our Story</h1>
        <img src={headSeperator} alt="head-seperator" />
        <Image src={webDeveloper} />

        <Right>
          <p>
            Make My Website is a digital agency with a vision to provide bespoke
            websites for every business. We are a small team of talented
            individuals willing to work your way to help you succeed online.
          </p>
          <p>
            Here at Make My Website, we offer quality websites and strive for
            customer satisfaction. Reliability being our biggest strength, we
            have the best client reviews from all over the country. We love what
            we do and that is why we excel in it.
          </p>
          <p>
            Our primary objective is to develop your brand, give your customers
            a user-friendly experience and market it for you throughout, and not
            just to earn money. We are excellent learners and observers and we
            never miss the opportunity to learn from our esteemed clients.
          </p>
          <p>
            Our creativity in tailoring websites for you and developing a
            framework of unique marketing strategies is what makes us stand out
            of the crowd.
          </p>
        </Right>
      </OurStory>
    </Wrap>
  </Layout>
)

export default AboutUs
