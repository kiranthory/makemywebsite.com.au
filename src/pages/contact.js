import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import headSeperator from "../images/heading-seperator.png"
import { IoIosCall } from "react-icons/io"
import { IoIosMail } from "react-icons/io"
import { IoMdClock } from "react-icons/io"
import { IoMdLocate } from "react-icons/io"
import {
  P,
  H1,
  H3,
  Wrap,
  ServiceHead,
  Section,
  Content,
} from "../components/serviceComponents"

const Left = styled.div({})
const Right = styled.div({})

const ContactPage = () => (
  <Layout>
    <Seo title="Contact - Make My Website And feel free to Meet Us At any time." />

    <Wrap>
      <ServiceHead>
        <H1>Get In Touch With Us</H1>
        <img src={headSeperator} alt="head-seperator" />
        <P>
          {IoIosMail} <b>E-Mail :</b> info@makemywebsite.com.au
        </P>
        <P>
          {IoIosCall} <b>Phone :</b> 1300769302
        </P>
        <P>
          {IoMdClock} <b>Opening Hours :</b> 09:00am-07:00pm
        </P>
      </ServiceHead>

      <Section>
        <Left></Left>
        <Content>
          <P>{IoMdLocate}</P>
          <H3>Address</H3>
          <P>129A Watton Street Werribee Victoria 3030, Australia</P>
        </Content>
      </Section>

      <Section>
        <Content>
          <P>{IoMdLocate}</P>
          <H3>Address</H3>
          <P>1/4A Bessemer St Blacktown NSW 2148</P>
        </Content>
        <Right></Right>
      </Section>
    </Wrap>
  </Layout>
)

export default ContactPage
