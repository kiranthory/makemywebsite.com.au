import styled from "@emotion/styled"
import { mq } from "../utils/styles"

const paddingH = [15, 30]
const paddingV = [30, 60]

const Row = styled.div(
  {
    flex: `1 1 auto`,
    margin: `0 auto`,
  },
  ...mq({
    maxWidth: 1200,
    paddingLeft: paddingH,
    paddingRight: paddingH,
  })
)

export const RowBig = styled(Row)(
  mq({
    paddingTop: paddingV,
    paddingBottom: paddingV,
  })
)

export default Row
