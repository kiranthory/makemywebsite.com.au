import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import Row from "./Row"
import logo from "../images/logo.png"

const Flex = styled.header({
  display: "flex",
  alignItems: "center",
  padding: `10px 0`,
})

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
  display: "flex",
})

const Item = styled.li({
  flex: `0 0 auto`,
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

const Header = ({ siteTitle }) => (
  <Row>
    <Flex>
      <Left>
        <LogoImg src={logo} />
      </Left>
      <Right>
        <Nav>
          <ItemLink>
            <Link to="/">
              <span>
                Home <hr />
              </span>
            </Link>
          </ItemLink>
          <ItemLink>
            <Link to="/page-2">
              <span>
                About <hr />
              </span>
            </Link>
          </ItemLink>
          <ItemLink>
            <Link to="/portfolio">
              <span>
                Our Portfolio <hr />
              </span>
            </Link>
          </ItemLink>
          <ItemLink>
            <Link to="/services">
              <span>
                Services <hr />
              </span>
            </Link>
          </ItemLink>
          <ItemLink>
            <Link to="/blog">
              <span>
                Blog and News <hr />
              </span>
            </Link>
          </ItemLink>
          <ItemLink>
            <Link to="/contact">
              <span>
                Contact <hr />
              </span>
            </Link>
          </ItemLink>
          <ItemButton>
            <Link to="/contact">Easy Engagements</Link>
          </ItemButton>
        </Nav>
      </Right>
    </Flex>
  </Row>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
