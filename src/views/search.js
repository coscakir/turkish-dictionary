import * as React from 'react'
import { FlatList, StatusBar, Animated } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect } from '@react-navigation/native'
import Search from '../components/search'
import Box from '../components/box'
import Text from '../components/text'
import Bg from '../components/bg'
import { Logo } from '../components/icons'
import { CardContainer, CardTitle, CardSummary } from '../components/card'

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
  const [heroHeight] = React.useState(new Animated.Value(285))
  const [isSearchFocus, setSearchFocus] = React.useState(false)

  React.useEffect(() => {
    if (isSearchFocus) {
      Animated.timing(heroHeight, {
        toValue: 84,
        duration: 230
      }).start()
    } else {
      Animated.timing(heroHeight, {
        toValue: 285,
        duration: 230
      }).start()
    }
  }, [heroHeight, isSearchFocus])

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle(isSearchFocus ? 'dark-content' : 'light-content')
    }, [isSearchFocus])
  )

  return (
    <Box as={SafeAreaView} bg={isSearchFocus ? 'softRed' : 'red'} flex={1}>
      {/** Header */}
      <Box
        as={Animated.View}
        position="relative"
        zIndex={1}
        height={heroHeight}
      >
        {!isSearchFocus && (
          <Bg>
            <Box flex={1} alignItems="center" justifyContent="center">
              <Logo color="white" />
            </Box>
          </Bg>
        )}
        {/** Search Box */}
        <Box
          position="absolute"
          left={0}
          bottom={isSearchFocus ? 0 : -42}
          p={16}
          width="100%"
        >
          <Search onChangeFocus={(status) => setSearchFocus(status)} />
        </Box>
      </Box>

      {/** Content */}
      <Box flex={1} bg="softRed" pt={26}>
        {isSearchFocus ? (
          <Box p={30} flex={1}>
            <Text>History</Text>
          </Box>
        ) : (
          <Box px={16} py={40} flex={1}>
            <Box>
              <Text pl={8} color="textLight">
                Bir Atasözü
              </Text>

              <CardContainer
                mt={10}
                onPress={() => navigation.navigate('Detail')}
              >
                <CardTitle>on para</CardTitle>
                <CardSummary>çok az (para).</CardSummary>
              </CardContainer>
            </Box>

            <Box mt={40}>
              <Text pl={8} color="textLight">
                Bir Deyim
              </Text>

              <CardContainer
                mt={10}
                onPress={() => navigation.navigate('Detail')}
              >
                <CardTitle>siyem siyem ağlamak</CardTitle>
                <CardSummary>
                  hafif hafif, ince ince, durmadan gözyaşı dökmek.
                </CardSummary>
              </CardContainer>
            </Box>
            {/** 
            <FlatList
              data={DATA}
              renderItem={({ item }) => (
                <CardContainer mb={10}>
                  <CardTitle>{item.title}</CardTitle>
                  <CardSummary>{item.summary}</CardSummary>
                </CardContainer>
              )}
              keyExtractor={(item) => item.id}
            />
             */}
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default SearchView
