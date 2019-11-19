import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Row from "../components/Row"
import { IoIosCall, IoIosMail, IoMdClock, IoMdLocate } from "react-icons/io"
import GoogleMap from "../components/GoogleMap"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { P, H1, H3, Wrap, Section } from "../components/serviceComponents"
import headSeperator from "../images/heading-seperator.png"

const Map = styled.div({
  flex: "1 1 50%",
})

const formStyle = css({
  width: "100%",
  padding: "10px",
  border: "1px solid #ccc",
  fontSize: "15px",
  lineHeight: "20px",
})

const ContactForm = styled.div({
  textAlign: "center",
  width: "100%",
  maxWidth: "70%",
  margin: "auto",

  label: {
    display: "flex",
  },

  button: {
    background: "#ED1C24",
    padding: "12px 25px",
    color: "#fff",
    border: "0px",
    borderRadius: "5px",
    textAlign: "center",
  },
})

export const ServiceHead = styled(Row)({
  textAlign: "center",
  padding: "70px 0",
})

const Content = styled.div({
  background: "#f1f1f1",
  flex: "1 1 50%",
  padding: "50px 30px",
  textAlign: "center",
})

const mapiconStyle = css({
  fill: "#ED1C24",
  width: "30px",
  height: "30px",
})

const iconStyle = css({
  fill: "#ED1C24",
  width: "20px",
  height: "20px",
  verticalAlign: "middle",
})

const ContactPage = () => (
  <Layout>
    <Seo title="Contact - Make My Website And feel free to Meet Us At any time." />

    <Wrap>
      <ServiceHead>
        <H1>Get In Touch With Us</H1>
        <img src={headSeperator} alt="head-seperator" />
        <P>
          <IoIosMail css={iconStyle} /> info@makemywebsite.com.au
        </P>
        <P>
          <IoIosCall css={iconStyle} /> 1300769302
        </P>
        <P>
          <IoMdClock css={iconStyle} /> 09:00am-07:00pm
        </P>
        <ContactForm>
          <form action="">
            <P>
              <label>Name </label>
              <input
                css={formStyle}
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
            </P>
            <P>
              <label>Email</label>
              <input
                css={formStyle}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </P>

            <P>
              <label>Message </label>
              <textarea
                css={formStyle}
                name="message"
                id="message"
                rows="5"
                placeholder="Comments"
              />
            </P>
            <P>
              <button type="submit">Send</button>
            </P>
          </form>
        </ContactForm>
      </ServiceHead>

      <Section>
        <Map>
          <GoogleMap lat={-37.90262} lng={144.65944} />
        </Map>
        <Content>
          <P>
            <IoMdLocate css={mapiconStyle} />
          </P>
          <H3>Address</H3>
          <P>
            129A Watton Street Werribee <br />
            Victoria 3030,
            <br /> Australia
          </P>
        </Content>
      </Section>

      <Section>
        <Content>
          <P>
            <IoMdLocate css={mapiconStyle} />
          </P>
          <H3>Address</H3>
          <P>
            1/4A Bessemer St Blacktown
            <br /> NSW 2148,
            <br /> Australia
          </P>
        </Content>
        <Map>
          <GoogleMap lat={-33.75858} lng={150.91115} />
        </Map>
      </Section>
    </Wrap>
  </Layout>
)

export default ContactPage
