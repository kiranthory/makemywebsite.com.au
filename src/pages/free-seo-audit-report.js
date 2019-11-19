import React from "react"
import styled from "@emotion/styled"
import Row from "../components/Row"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { css } from "@emotion/core"
import { P, H1, Wrap, Section } from "../components/serviceComponents"
import headSeperator from "../images/heading-seperator.png"

const formStyle = css({
  width: "100%",
  padding: "10px",
  border: "0px",
  borderBottom: "1px solid #ccc",
  fontSize: "15px",
  lineHeight: "20px",
})

const ContactForm = styled.div({
  textAlign: "center",
  width: "100%",
  maxWidth: "70%",
  margin: "auto",
  paddingTop: "40px",
  paddingBottom: "70px",

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
  paddingTop: "70px ",
})

const SeoAuditReport = () => (
  <Layout>
    <Seo title="Get A FREE SEO Audit Report" />

    <Wrap>
      <ServiceHead>
        <H1>Get A FREE SEO Audit Report</H1>
        <img src={headSeperator} alt="head-seperator" />
      </ServiceHead>

      <Section>
        <ContactForm>
          <form action="">
            <P>
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
              <input
                css={formStyle}
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                required
              />
            </P>

            <P>
              <input
                css={formStyle}
                type="url"
                name="websiteurl"
                id="websiteurl"
                placeholder="Website Url"
                required
              />
            </P>

            <P>
              <select css={formStyle} required>
                <option value="" disabled selected hidden>
                  --Select Monthly Budget--
                </option>
                <option value="Less Than $250">Less Than $250</option>
                <option value="$250 - $400">$250 - $400</option>
                <option value="$400 - $500">$400 - $500</option>
                <option value="Above $500">Above $500</option>
              </select>
            </P>

            <P>
              <textarea
                css={formStyle}
                name="message"
                id="message"
                rows="7"
                placeholder="Your Message on Requirement"
              />
            </P>
            <P>
              <button type="submit">Send</button>
            </P>
          </form>
        </ContactForm>
      </Section>
    </Wrap>
  </Layout>
)

export default SeoAuditReport
