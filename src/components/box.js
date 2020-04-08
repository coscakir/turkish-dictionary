import { View } from 'react-native'
import styled from 'styled-components'
import {
  compose,
  border,
  color,
  size,
  space,
  flexbox,
  borderRadius
} from 'styled-system'

const Box = styled(View)(
  compose(flexbox, color, size, space, border, borderRadius)
)

export default Box
