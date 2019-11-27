import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Button } from "rebass"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { IoIosArrowDown } from "react-icons/io"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Row from "../components/Row"
import Typist from "react-typist"
import TypistLoop from "react-typist-loop"
import InstagramEmbed from "react-instagram-embed"
import {
  IoIosBulb,
  IoMdRadioButtonOn,
  IoIosCard,
  IoIosPeople,
  IoMdTrendingUp,
} from "react-icons/io"
import HeroBackground2 from "../components/HeroBackground2"
import headSeperator from "../images/heading-seperator.png"
import codingImg from "../images/Programming-And-Coding-mmw.jpg"
import onlineMarketing from "../images/Online-Marketing-mmw.jpg"
import emailHosting from "../images/email-hosting-mmw.jpg"
import fiveStar from "../images/5-star.png"
import cyanergyLogo from "../images/cyanergy-logo.jpg"
import webCyanergy from "../images/cyanergy-desktop.png"
import IndianLogo from "../images/Indian-Bazaar.png"
import IndianBazaar from "../images/indian-bazaar-img.png"
import LuxLogo from "../images/lux-icon.jpg"
import LuxProperty from "../images/lux-property-group.png"
import designIcon from "../images/web-design_icon.png"
import marketingIcon from "../images/online-marketing-icon.png"
import hostingIcon from "../images/web-email-hosting_icon.png"
import ecommerceIcon from "../images/ecommerce-img-icon.png"
import seoIcon from "../images/seo-service-icon.png"
import contentIcon from "../images/content-writing-icon.png"
import socialIcon from "../images/social-icon.png"
import payperIcon from "../images/pay-per-click_icon.png"
import HeroMap from "../images/hero-map.png"
import StarAgency from "../images/5-star-agency-img.png"
import CustomerSupport from "../images/support.png"
import ChooseBg from "../images/choose-bg.jpg"
import { P, H1, Wrap } from "../components/serviceComponents"

const H4 = styled.h4({
  fontSize: "22px",
  margin: "15px 0",
})

const H5 = styled.h4({
  fontSize: "18px",
  margin: "10px 0",
})

const HeroLeft = styled.div({
  flex: "1 1 60%",
})
const HeroRight = styled.div({
  flex: "1 1 40%",
})

const HeroTop = styled.div({
  display: "flex",
})

const HeroCounter = styled.div({
  display: "flex",
  textAlign: "center",
  alignItems: "baseline",
  background: "rgba(0, 0, 0, 0.62)",
  padding: "20px",
  borderRadius: "20px",
  margin: "70px 0",
})
const HeroItem = styled.div({
  flex: "1 1 20%",
  p: {
    fontSize: "20px",
    lineHeight: "30px",
  },

  h3: {
    fontSize: "40px",
    fontWeight: 600,
  },
})

const MakeRow = styled(Row)({
  textAlign: "center",
  padding: "80px 0 ",
})

var ChooseStyle = {
  width: "100%",
  height: "auto",
  backgroundImage: `url(${ChooseBg})`,
  backgroundSize: "cover",
}

const MakeContainer = styled(Row)({
  textAlign: "left",
  display: "flex",
  padding: "10px 0px 30px",
})

const MakeImg = styled(Row)({
  display: "flex",
})

const AboutImg = styled.div({
  flex: "1 1 33%",
  padding: "0px 8px",

  img: {
    width: "100%",
  },
})
const ChooseImg = styled.div({
  display: "flex",
  paddingTop: "35px",
})
const Item = styled.div({
  flex: "1 1 20%",
})

const iconStyle = css({
  width: "100px",
  height: "100px",
  border: "2px dashed #000",
  padding: "15px",
  marginBottom: "15px",
  borderRadius: "100%",
})

const Left = styled.div({
  flex: "1 1 50%",
  textAlign: "right",
  padding: "0px 10px",
  borderRight: "2px dashed #ddd",
})

const Right = styled.div({
  flex: "1 1 50%",
  padding: "0px 10px",
})

const TestiSlide = styled.div({
  display: "flex",
  textAlign: "Center",
})

const LeftContent = styled.div({
  flex: "1 1 50%",
  padding: "20px ",
  a: {
    color: "#ED1C24",
    textDecoration: "none",
  },
})

const RightImg = styled.div({
  flex: "1 1 50%",
  img: {
    width: "100%",
  },
})

const TestiLogo = styled.img({
  borderRadius: "100%",
  width: "80px",
  boxShadow: "0px 0px 8px #ccc",
  padding: "10px",
  display: "block",
  margin: "0 auto 15px",
})

const MakeService = styled(Row)({
  display: "flex",
  textAlign: "center",
  alignItems: "center",
})

const LeftService = styled.div({
  flex: "1 1 20%",
})

const RightService = styled.div({
  flex: "1 1 80%",
})

const ServiceContainer = styled.div({
  display: "flex",
  flexWrap: "wrap",
})

const ServiceItem = styled.div({
  flex: "1 1 25%",
  padding: "5px",
  display: "flex",
  img: {
    width: "100%",
  },


})

const ServiceFront = styled.div({
  display: "flex",
  flexDirection: "column",
  background: "#eee",
})

const ServiceBack = styled.div({
  display: "none",
})

const InstaContainer = styled.div({})

const Hero = styled.div({
  minHeight: `100vh`,
  display: "flex",
  alignItems: "flex-end",
  position: "relative",
  color: "#fff",
})

const HeroRow = styled(Row)({
  paddingTop: 20,
  paddingBottom: 20,
  zIndex: 1,
  position: "relative",
})

const HeroH1 = styled.h1({
  fontSize: 40,
  fontWeight: 700,
  maxWidth: 680,
  lineHeight: 1.4,
  marginTop: 0,
  marginBottom: 20,
})

const HeroP = styled.p({
  fontSize: 20,
  fontWeight: 400,
  maxWidth: 480,
  lineHeight: 1.5,
  marginBottom: 40,
})

const Content = styled.div({
  background: `#fff`,
})

const Btn = styled(Button)({
  marginRight: 15,
  borderRadius: `0`,
  background: `#ed1c24`,
  padding: `13px 25px`,
  cursor: "pointer",
  fontFamily: `Montserrat, -apple-system, BlinkMacSystemFont, Arial, sans-serif`,
})

const anchorCss = css({
  position: "absolute",
  bottom: 0,
  left: `50%`,
  transform: `translateX(-50%)`,
  background: "none",
  border: 0,
  padding: 10,
})

const IndexPage = () => {
  const isBrowser = typeof window !== "undefined"

  return (
    <Layout alternateHeader>
      <Seo title="Home" />

      <Hero>
        <div
          css={{
            background: "#000",
            position: "fixed",
            width: `100%`,
            height: `100%`,
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          {isBrowser && <HeroBackground2 />}
        </div>
        <HeroRow>
          <HeroTop>
            <HeroLeft>
              <HeroH1>
                <TypistLoop interval={2000} count={100}>
                  {[
                    "If it's not done to perfection, don't do it at all.",
                    "Happy Clients in All States & Territories",
                    "Let's build a future out of the History",
                    "Your Ambition together with our engagement leads to business growth",
                    "Speak with Our Specialists to expand your social reach",
                  ].map(text => (
                    <Typist key={text} startDelay={20}>
                      {text}
                      <Typist.Backspace count={100} delay={20} />
                    </Typist>
                  ))}
                </TypistLoop>
              </HeroH1>
              <HeroP>
                We build successful responsive sites that genuinely connect with
                your target audience.
              </HeroP>
              <Btn>Contact Us</Btn>
            </HeroLeft>
            <HeroRight>
              <img src={HeroMap} alt="Australia Map" />
            </HeroRight>
          </HeroTop>
          <HeroCounter>
            <HeroItem>
              <h3>1,000+</h3>
              <p>Happy Clients</p>
            </HeroItem>
            <HeroItem>
              <h3>10+</h3>
              <p>Years of Expertise</p>
            </HeroItem>
            <HeroItem>
              <h3>100%</h3>
              <p>Australian Owned</p>
            </HeroItem>
            <HeroItem>
              <img src={StarAgency} alt="5 Star Rated Web Design Agency" />{" "}
              <p>5-star rated Web Design Agency</p>
            </HeroItem>
            <HeroItem>
              <img src={CustomerSupport} alt="Exceptional Customer Support" />
              <p>Exceptional Customer Service</p>
            </HeroItem>
          </HeroCounter>
        </HeroRow>
        <AnchorLink href="#content" css={anchorCss}>
          <IoIosArrowDown fill="#fff" size="40" />
        </AnchorLink>
      </Hero>

      <Content id="content">
        <Wrap>
          <MakeRow>
            <H1>About Make My Website</H1>
            <img src={headSeperator} alt="head-seperator" />
            <P></P>
            <P>We Don’t Just Build Websites, We Build Your Online Business!</P>
            <MakeContainer>
              <Left>
                <P>
                  Make My Website is a digital agency made up of extremely
                  talented, highly trained and skilled professionals who work
                  with you to create your online presence and are dedicated to
                  meet the goals and guidelines to deliver your project.
                </P>
              </Left>
              <Right>
                <P>
                  We are a small team of experts who is willing to work your way
                  to help you succeed online.
                </P>
              </Right>
            </MakeContainer>
            <MakeImg>
              <AboutImg>
                <img src={codingImg} alt="Web Development" />
              </AboutImg>
              <AboutImg>
                <img src={onlineMarketing} alt="Online Marketing" />
              </AboutImg>
              <AboutImg>
                <img src={emailHosting} alt="Seo" />
              </AboutImg>
            </MakeImg>
          </MakeRow>

          <MakeRow style={ChooseStyle}>
            <H1>Why Choose Us</H1>
            <img src={headSeperator} alt="head-seperator" />
            <ChooseImg>
              <Item>
                <IoIosBulb css={iconStyle} />
                <P>We have Futuristic Approach</P>
              </Item>
              <Item>
                <IoMdRadioButtonOn css={iconStyle} />
                <P>We Aim to Excel</P>
              </Item>
              <Item>
                <IoIosCard css={iconStyle} />
                <P>We Understand Your Identity</P>
              </Item>
              <Item>
                <IoIosPeople css={iconStyle} />
                <P>We Make It Personal</P>
              </Item>
              <Item>
                <IoMdTrendingUp css={iconStyle} />
                <P>We are Result Driven</P>
              </Item>
            </ChooseImg>
          </MakeRow>
          <MakeRow>
            <MakeService>
              <LeftService>
                <H1>Services</H1>
                <img src={headSeperator} alt="head-seperator" />
                <P>
                  Elevate Your Businesses Capabilities With One Step. We offer a
                  wide variety of website design services.
                </P>
                <Link to="/services">View All Services</Link>
              </LeftService>
              <RightService>
                <ServiceContainer>
                  <ServiceItem>
                    <ServiceFront>
                      {" "}
                      <img src={designIcon} alt="Web Designing" />
                      <H5>Web Design</H5>
                    </ServiceFront>
                    <ServiceBack>
                      <H5>Web Design</H5>
                      <P>
                        The world is getting advanced and for matching the
                        standards of present era, online existence is must.
                      </P>
                    </ServiceBack>
                  </ServiceItem>
                  <ServiceItem>
                    <ServiceFront>
                      {" "}
                      <img src={marketingIcon} alt="Online Marketing" />
                      <H5>Online Marketing</H5>
                    </ServiceFront>
                    <ServiceBack>
                      <H5>Online Marketing</H5>
                      <P>
                        Marketing is essential today and no business can shrug
                        off the value of this powerful factor.
                      </P>
                    </ServiceBack>
                  </ServiceItem>
                  <ServiceItem>
                    <ServiceFront>
                      <img src={hostingIcon} alt="Web And Email Hosting" />
                      <H5>Web And Email Hosting</H5>
                    </ServiceFront>
                    <ServiceBack>
                      <H5>Web And Email Hosting</H5>
                      <P>
                        Web hosting is actually the space which you purchase on
                        a web server so as to store your site files.
                      </P>
                    </ServiceBack>
                  </ServiceItem>
                  <ServiceItem>
                    <ServiceFront>
                      <img src={ecommerceIcon} alt="Ecommerce" />
                      <H5>Ecommerce</H5>
                    </ServiceFront>
                    <ServiceBack>
                      <H5>Ecommerce</H5>
                      <P>
                        Over the previous decade the usefulness of internet has
                        augmented manifold.
                      </P>
                    </ServiceBack>
                  </ServiceItem>
                </ServiceContainer>
                <ServiceContainer>
                  <ServiceItem>
                    <ServiceFront>
                      <img src={seoIcon} alt="SEO" />
                      <H5>SEO</H5>
                    </ServiceFront>
                    <ServiceBack>
                      <H5>SEO</H5>
                      <P>
                        SEO is one of the main marketing channels to endorse
                        website exposure via higher visibility in search
                        engines.
                      </P>
                    </ServiceBack>
                  </ServiceItem>
                  <ServiceItem>
                    <ServiceFront>
                      <img src={contentIcon} alt="Content Writing" />
                      <H5>Content Writing</H5>
                    </ServiceFront>
                    <ServiceBack>
                      <H5>Content Writing</H5>
                      <P>
                        At Make My Website, our experts are well acquainting
                        with all the tactics of content writing.
                      </P>
                    </ServiceBack>
                  </ServiceItem>
                  <ServiceItem>
                    <ServiceFront>
                      <img src={socialIcon} alt="Social Media Marketing" />
                      <H5>Social Media Marketing</H5>
                    </ServiceFront>
                    <ServiceBack>
                      <H5>Social Media Marketing</H5>
                      <P>
                        No matter what you sell and who is your buyer, making
                        use of social media as a marketing device can prove very
                        helpful for growing your brand.
                      </P>
                    </ServiceBack>
                  </ServiceItem>
                  <ServiceItem>
                    <ServiceFront>
                      <img src={payperIcon} alt="Pay Per Click" />
                      <H5>Pay Per Click</H5>
                    </ServiceFront>
                    <ServiceBack>
                      <H5>Pay Per Click</H5>
                      <P>
                        Even the marketing experts can make errors when they
                        begin to sell a new product with the help of PPC.
                      </P>
                    </ServiceBack>
                  </ServiceItem>
                </ServiceContainer>
              </RightService>
            </MakeService>
          </MakeRow>
          <MakeRow>
            <TestiSlide>
              <LeftContent>
                <TestiLogo src={cyanergyLogo} alt="5 Star" />
                <img src={fiveStar} alt="5 Star" />
                <H4>Cyanergy Pty Ltd</H4>
                <P>
                  “Amazing service and most of all the most amazing people and
                  talents on the digital space, as far as we’re concerned. Thank
                  you so much!”
                </P>
                <a
                  href="https://www.cyanergy.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.cyanergy.com.au
                </a>
              </LeftContent>
              <RightImg>
                <img src={webCyanergy} alt="5 Star" />
              </RightImg>
            </TestiSlide>

            <TestiSlide>
              <LeftContent>
                <TestiLogo src={LuxLogo} alt="5 Star" />
                <img src={fiveStar} alt="5 Star" />
                <H4>Jesse Cai</H4>
                <P>
                  “Brilliant customer service as pick up calls even late at
                  night and also with the website professional work on it, easy
                  to use prestige looks. Thank you for the hard work you guys
                  has put into it. Also pricing is great, worth what its
                  delivers.”
                </P>
                <a
                  href="https://www.homehotel.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.homehotel.com.au
                </a>{" "}
                or{" "}
                <a
                  href="https://www.luxpropertygroup.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.luxpropertygroup.com.au
                </a>
              </LeftContent>
              <RightImg>
                <img src={LuxProperty} alt="5 Star" />
              </RightImg>
            </TestiSlide>

            <TestiSlide>
              <LeftContent>
                <TestiLogo src={IndianLogo} alt="5 Star" />
                <img src={fiveStar} alt="5 Star" />
                <H4>Shwetali Sawant</H4>
                <P>
                  “Extremely happy with the work and support of Make My Website
                  team. The end result speaks for itself. I’ll highly recommend
                  them for a professional and top notch website.”
                </P>
                <a
                  href="https://www.shwetaoz.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.shwetaoz.com
                </a>
              </LeftContent>
              <RightImg>
                <img src={IndianBazaar} alt="5 Star" />
              </RightImg>
            </TestiSlide>
          </MakeRow>
          <MakeRow>
            <H1>Follow Us On Instagram</H1>
            <img src={headSeperator} alt="head-seperator" />
            <InstaContainer>
              <InstagramEmbed
                url="https://instagr.am/p/Zw9o4/"
                maxWidth={320}
                hideCaption={false}
                containerTagName="div"
                protocol=""
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
              />
            </InstaContainer>
          </MakeRow>
        </Wrap>
      </Content>
    </Layout>
  )
}

export default IndexPage
