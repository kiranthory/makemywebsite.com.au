import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
import { Button } from "rebass"
import { mq } from "../utils/styles"
import Logo from "../images/logos/MM-Black.svg"
import LogoWhite from "../images/logos/MM-White.svg"

const paddingH = [15, 30, 30, 60]
const paddingV = [5, 15]

const Flex = styled.header(
  {
    display: "flex",
    alignItems: "center",
    width: `100%`,
    zIndex: 1,
    fontFamily: `Montserrat, -apple-system, BlinkMacSystemFont, Arial, sans-serif`,
  },
  mq({
    paddingLeft: paddingH,
    paddingRight: paddingH,
    paddingTop: paddingV,
    paddingBottom: paddingV,
  }),
  ({ alternate }) =>
    !alternate
      ? {
          color: `#000`,
        }
      : {
          position: `absolute`,
          color: `#fff`,
        }
)

const Left = styled.div({
  flex: `1 1 auto`,
})

const Right = styled.nav({})

const LogoSvg = styled.div({
  maxWidth: 170,
})

const Nav = styled.ul({
  listStyle: "none",
  margin: 0,
  padding: 0,
  fontSize: 0,
})

const Item = styled.li({
  display: "inline-block",
  fontSize: "1rem",
  a: {
    position: "relative",
    textDecoration: "none",
    display: "block",
    padding: "15px",
    fontWeight: 600,
    transition: "all 0.3s ease",
    color: "inherit",
  },
})

const ItemLink = styled(Item)(
  {
    span: {
      display: "block",
      position: "relative",
    },
    hr: {
      display: "block",
      position: "absolute",
      margin: 0,
      padding: 0,
      left: 0,
      bottom: -14,
      height: 3,
      width: 0,
      opacity: 0,
      background: `#000`,
      border: 0,
      transition: "all 0.3s ease",
    },
    "a:hover hr": {
      width: `100%`,
      opacity: 1,
    },
  },
  ({ alternate }) => ({
    hr: !alternate
      ? {}
      : {
          background: `#fff`,
        },
  })
)

const ItemBtn = styled(Item)({
  marginLeft: 20,
})

const Btn = styled(Button)({
  fontWeight: "inherit",
  backgroundColor: `#ed1c24`,
  cursor: "pointer",
})

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Portfolio", "/portfolio"],
  ["Services", "/services"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
]

const Header = ({ alternate = false }) => (
  <Flex alternate={alternate}>
    <Left>
      <LogoSvg>{alternate ? <LogoWhite /> : <Logo />}</LogoSvg>
    </Left>
    <Right>
      <Nav>
        {links.map(([title, link], index) => (
          <ItemLink key={index} alternate={alternate}>
            <Link to={link}>
              <span>
                {title} <hr />
              </span>
            </Link>
          </ItemLink>
        ))}
        <ItemBtn>
          <Btn>Easy Engagements</Btn>
        </ItemBtn>
      </Nav>
    </Right>
  </Flex>
)

export default Header
