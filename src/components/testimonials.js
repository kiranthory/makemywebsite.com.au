import React from "react"
import styled from "@emotion/styled"
import Row from "../components/Row"
import Slider from "infinite-react-carousel"
import fiveStar from "../images/5-star.png"
import cyanergyLogo from "../images/cyanergy-logo.jpg"
import webCyanergy from "../images/cyanergy-desktop.png"
import IndianLogo from "../images/Indian-Bazaar.png"
import IndianBazaar from "../images/indian-bazaar-img.png"
import LuxLogo from "../images/lux-icon.jpg"
import LuxProperty from "../images/lux-property-group.png"

const P = styled.p({
  lineHeight: "28px",
  marginTop: "0px",
  marginBottom: "15px",
  color: "#fff",
})

const TestiRow = styled(Row)({
  zIndex: 9999,
  position: "relative",
  a: {
    fontWeight: 600,
  },
})

const H4 = styled.h4({
  fontSize: "22px",
  margin: "15px 0",
  color: "#fff",
})

const TestiSlide = styled.div({
  display: "flex",
  textAlign: "Center",
  alignItems:'center',
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

const Testimonials = () => (
  <Slider dots>
    <TestiRow>
      <TestiSlide>
        <LeftContent>
          <TestiLogo src={cyanergyLogo} alt="5 Star" />
          <img src={fiveStar} alt="5 Star" />
          <H4>Cyanergy Pty Ltd</H4>
          <P>
            “Amazing service and most of all the most amazing people and talents
            on the digital space, as far as we’re concerned. Thank you so much!”
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
    </TestiRow>
    <TestiRow>
      <TestiSlide>
        <LeftContent>
          <TestiLogo src={LuxLogo} alt="5 Star" />
          <img src={fiveStar} alt="5 Star" />
          <H4>Jesse Cai</H4>
          <P>
            “Brilliant customer service as pick up calls even late at night and
            also with the website professional work on it, easy to use prestige
            looks. Thank you for the hard work you guys has put into it. Also
            pricing is great, worth what its delivers.”
          </P>
          <a
            href="https://www.homehotel.com.au/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.homehotel.com.au
          </a>
          <br />
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
    </TestiRow>
    <TestiRow>
      <TestiSlide>
        <LeftContent>
          <TestiLogo src={IndianLogo} alt="5 Star" />
          <img src={fiveStar} alt="5 Star" />
          <H4>Shwetali Sawant</H4>
          <P>
            “Extremely happy with the work and support of Make My Website team.
            The end result speaks for itself. I’ll highly recommend them for a
            professional and top notch website.”
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
    </TestiRow>
  </Slider>
)

export default Testimonials
