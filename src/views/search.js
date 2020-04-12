import React from 'react'
import { StatusBar } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect } from '@react-navigation/native'

import Box from '../components/box'
import SearchHeader from '../components/search-header'
import SuggestionCard from '../components/suggestion-card'
import SearchHistoryList from '../components/search-history-list'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    summary: 'summary test 1'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    summary: 'summary test 2'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    summary: 'summary test 3'
  }
]

function SearchView({ navigation }) {
  const [isSearchFocus, setSearchFocus] = React.useState(false)
  const [homeData, setHomeData] = React.useState(null)

  const getHomeData = async () => {
    const response = await fetch('https://sozluk.gov.tr/icerik')
    const data = await response.json()
    setHomeData(data)
  }

  React.useEffect(() => {
    getHomeData()
  }, [])

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle(isSearchFocus ? 'dark-content' : 'light-content')
    }, [isSearchFocus])
  )

  return (
    <Box as={SafeAreaView} bg={isSearchFocus ? 'softRed' : 'red'} flex={1}>
      {/** Search Header */}
      <SearchHeader
        isSearchFocus={isSearchFocus}
        onSearchFocus={setSearchFocus}
      />

      {/** Content */}
      <Box flex={1} bg="softRed" pt={26}>
        {isSearchFocus ? (
          <Box flex={1}>
            <SearchHistoryList data={DATA} />
          </Box>
        ) : (
          <Box px={16} py={40} flex={1}>
            <SuggestionCard
              title="Bir Kelime"
              data={homeData?.kelime[0]}
              onPress={() =>
                navigation.navigate('Detail', {
                  keyword: homeData?.kelime[0].madde
                })
              }
            />
            <SuggestionCard
              mt={40}
              title="Bir Deyim-Atasözü"
              data={homeData?.atasoz[0]}
              onPress={() =>
                navigation.navigate('Detail', {
                  keyword: homeData.atasoz[0].madde
                })
              }
            />
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default SearchView
