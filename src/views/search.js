import * as React from 'react'
import { Text, Button } from 'react-native'
import BoxCenter from '../components/box-center'
import { LogoWhite } from '../components/icons'
function SearchView({ navigation }) {
  return (
    <BoxCenter>
      <Text>Sarch!</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate('Detail')}
      />
      <LogoWhite color="red" />
    </BoxCenter>
  )
}

export default SearchView
