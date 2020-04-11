import React from 'react'
import { Animated } from 'react-native'

import Box from './box'
import Bg from './bg'
import SearchInput from './search-input'
import { Logo } from './icons'

const HERO_HEIGHT = 230

function SearchHeader({ isSearchFocus, onSearchFocus }) {
  const [bgOpacity] = React.useState(new Animated.Value(1))
  const [heroHeight] = React.useState(new Animated.Value(HERO_HEIGHT))

  React.useEffect(() => {
    if (isSearchFocus) {
      // hero opacity
      Animated.timing(bgOpacity, {
        toValue: 0,
        duration: 230
      }).start()
      // hero height
      Animated.timing(heroHeight, {
        toValue: 84,
        duration: 230
      }).start()
    } else {
      // hero opacity
      Animated.timing(bgOpacity, {
        toValue: 1,
        duration: 230
      }).start()
      // hero height
      Animated.timing(heroHeight, {
        toValue: HERO_HEIGHT,
        duration: 230
      }).start()
    }
  }, [bgOpacity, heroHeight, isSearchFocus])

  return (
    <Box as={Animated.View} position="relative" zIndex={1} height={heroHeight}>
      <Box mt={-60} as={Animated.View} style={{ opacity: bgOpacity }}>
        <Bg pt={60} pb={26}>
          <Box flex={1} alignItems="center" justifyContent="center">
            <Logo color="white" />
          </Box>
        </Bg>
      </Box>

      {/** Search Input */}
      <Box
        position="absolute"
        left={0}
        bottom={isSearchFocus ? 0 : -42}
        p={16}
        width="100%"
      >
        <SearchInput onChangeFocus={(status) => onSearchFocus(status)} />
      </Box>
    </Box>
  )
}

export default SearchHeader
