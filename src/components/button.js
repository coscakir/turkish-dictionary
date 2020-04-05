import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import {
  compose,
  color,
  size,
  space,
  flexbox,
  borderRadius,
} from 'styled-system'

const Button = styled(TouchableOpacity)(
  compose(
    flexbox,
    color,
    size,
    space,
    borderRadius
  )
)

Button.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
}

export default Button
