import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
import { Button } from "rebass"
import { mq } from "../utils/styles"
import logo from "../images/logos/MM-Black.svg"

const paddingH = [15, 30, 30, 60]
const paddingV = [5, 15]

const Flex = styled.header(
  {
    display: "flex",
    alignItems: "center",
  },
  mq({
    paddingLeft: paddingH,
    paddingRight: paddingH,
    paddingTop: paddingV,
    paddingBottom: paddingV,
  })
)

const Left = styled.div({
  flex: `1 1 auto`,
})

const Right = styled.nav({})

const LogoImg = styled.img({
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
    transition: "all 0.3s ease",
  },
})

const ItemLink = styled(Item)({
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
    height: 1,
    width: 0,
    opacity: 0,
    background: `#000`,
    transition: "all 0.3s ease",
  },
  "a:hover hr": {
    width: `100%`,
    opacity: 1,
  },
})

const ItemButton = styled(Item)({
  marginLeft: 20,
  a: {
    background: `#ED1C24`,
    color: `#fff`,
  },
})

const links = [
  ["Home 2", "/"],
  ["About", "/about"],
  ["Portfolio", "/portfolio"],
  ["Services", "/services"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
]

const Header = () => (
  <Flex>
    <Left>
      <LogoImg src={logo} />
    </Left>
    <Right>
      <Nav>
        {links.map(([title, link], index) => (
          <ItemLink key={index}>
            <Link to={link}>
              <span>
                {title} <hr />
              </span>
            </Link>
          </ItemLink>
        ))}
        <ItemButton>
          <Button>Easy Engagements</Button>
        </ItemButton>
      </Nav>
    </Right>
  </Flex>
)

export default Header
