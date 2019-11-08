import facepaint from "facepaint"

// breakpoints and media queries
export const breakpoints = ["500px", "900px", "1200px"]
export const mediaQueries = breakpoints.map(bp => `@media (min-width: ${bp})`)
export const mq = facepaint(mediaQueries)

// rebass theme
export default {
  breakpoints,
  fontSizes: [16, 20, 24, 32, 48, 64],
  colors: {
    primary: "#07c",
    lightgray: "#f6f6ff",
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: "system-ui, sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  shadows: {
    small: "0 0 4px rgba(0, 0, 0, .125)",
    large: "0 0 24px rgba(0, 0, 0, .125)",
  },
  variants: {},
  text: {},
  buttons: {
    primary: {
      color: "white",
      bg: "primary",
    },
  },
}
