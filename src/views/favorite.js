import * as React from 'react'
import { StatusBar, Text } from 'react-native'
import Box from '../components/box'
import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect } from '@react-navigation/native'

function FavoriteView() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
    }, [])
  )

  return (
    <Box as={SafeAreaView} flex={1}>
      <Text>Favorites!</Text>
    </Box>
  )
}

export default FavoriteView
