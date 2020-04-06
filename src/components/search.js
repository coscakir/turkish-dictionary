import React from 'react'
import { Keyboard } from 'react-native'
import Box from './box'
import Input from './input'
import Text from './text'
import { Search, Clear } from './icons'
import theme from '../utils/theme'
import Button from './button'

function SearchBox({ onChangeFocus }) {
  const [value, setValue] = React.useState('')
  const [isFocus, setFocus] = React.useState(false)

  React.useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardDidShow)
    Keyboard.addListener('keyboardDidHide', keyboardDidHide)
    return function () {
      Keyboard.removeListener('keyboardDidShow', keyboardDidShow)
      Keyboard.removeListener('keyboardDidHide', keyboardDidHide)
    }
  })

  const keyboardDidShow = () => {
    onChangeFocus(true)
  }

  const keyboardDidHide = () => {
    onChangeFocus(false)
  }

  const onCancel = () => {
    setFocus(false)
    Keyboard.dismiss()
  }

  const onClear = () => {
    setValue('')
  }

  return (
    <Box flexDirection="row" alignItems="center">
      <Box position="relative" flex={1}>
        <Input
          style={{
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 24,
            shadowOffset: { width: 0, height: 4 }
          }}
          bg="white"
          height={52}
          pl={isFocus ? 16 : 52}
          stroke={1}
          borderRadius="normal"
          borderWidth={1}
          borderColor={isFocus ? '#D1D1D1' : 'transparent'}
          color="textDark"
          placeholder="Search in Dictionary"
          placeholderTextColor="textMedium"
          value={value}
          onFocus={() => setFocus(true)}
          onChangeText={(text) => setValue(text)}
        />
        {value.length > 0 && (
          <Button onPress={onClear} position="absolute" right={16} top={14}>
            <Clear color={theme.colors.textDark} />
          </Button>
        )}
        {!isFocus && (
          <Button
            onPress={() => setFocus(true)}
            position="absolute"
            left={16}
            top={14}
          >
            <Search color={theme.colors.textLight} />
          </Button>
        )}
      </Box>

      {isFocus && (
        <Button onPress={onCancel} px={15} height={52}>
          <Text>Cancel</Text>
        </Button>
      )}
    </Box>
  )
}

export default SearchBox
