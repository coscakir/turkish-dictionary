import * as React from 'react'
import { Text, ImageBackground, StatusBar } from 'react-native'
import { Logo } from '../components/icons'
import Search from '../components/search'
import Box from '../components/box'
import bg from '../assets/images/bg.jpg'
import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect } from '@react-navigation/native'

function SearchView() {
  const [isSearchFocus, setSearchFocus] = React.useState(false)

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content')
    }, [])
  )

  return (
    <Box as={SafeAreaView} bg="red" flex={1}>
      {/** Header */}
      <Box position="relative" zIndex={1} height={isSearchFocus ? 0 : 285}>
        <Box
          as={ImageBackground}
          source={bg}
          style={{ width: '100%', height: '100%' }}
        >
          {/** Logo */}
          <Box flex={1} alignItems="center" justifyContent="center">
            <Logo color="white" />
          </Box>

          {/** Search Box */}
          <Box p={16} width="100%" mb={-42}>
            <Search onChangeFocus={(status) => setSearchFocus(status)} />
          </Box>
        </Box>
      </Box>

      {/** Content */}
      <Box flex={1} bg="white" pt={26}>
        <Box p={30} flex={1}>
          <Text>Hello</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default SearchView
