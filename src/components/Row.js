import styled from "@emotion/styled"

const Row = styled.div({
  maxWidth: 1200,
  padding: `0 30px`,
  flex: `1 1 auto`,
  margin: `0 auto`,
})

export const RowBig = styled(Row)({
  paddingTop: 60,
  paddingBottom: 60,
})

export default Row
