import * as React from 'react'
import { Text, Button } from 'react-native'
import { LogoWhite } from '../components/icons'
import Search from '../components/search'
import Box from '../components/box'

function SearchView({ navigation }) {
  return (
    <Box>
      <Box py={20} alignItems="center">
        <LogoWhite color="red" />
      </Box>
      <Box p={10}>
        <Search />
      </Box>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate('Detail')}
      />
    </Box>
  )
}

export default SearchView
