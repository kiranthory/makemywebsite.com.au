import React, { useState } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import { IoIosHelpCircleOutline, IoIosAdd } from "react-icons/io"

const Button = styled.button({
  backgroundColor: "#ed1c24",
  color: "#fff",
  cursor: "pointer",
  padding: "20px 50px",
  width: "100%",
  textAlign: "left",
  border: "none",
  outline: "none",
  transition: "0.4s",
  marginBottom: "10px",
  position: "relative",
})

const addStyle = css({
  float: "right",
  fontSize: "2em",
  position: "absolute",
  right: "4px",
  transform: "translate(0, -18%)",
})

const helpStyle = css({
  fontSize: "2em",
  position: "absolute",
  left: "10px",
  top: "12px",
})

const Content = styled.div(
  {
    padding: "20px 57px",
    textAlign: "justify",
  },
  ({ active }) => ({
    display: active ? "block" : "none",
  })
)

const Title = ({ children, ...props }) => (
  <Button {...props}>
    <IoIosHelpCircleOutline css={helpStyle} />
    {children}
    <IoIosAdd css={addStyle} />
  </Button>
)

const Accordion = ({ title, children, defaultActive = false }) => {
  const [active, setActive] = useState(defaultActive)

  return (
    <>
      <Title onClick={() => setActive(!active)}>{title}</Title>
      <Content active={active}>{children}</Content>
    </>
  )
}

export default Accordion
