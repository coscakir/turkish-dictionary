import React from 'react'
import { ActivityIndicator } from 'react-native'

import Box from './box'
import Text from './text'
import { CardContainer, CardTitle, CardSummary } from './card'

function SuggestionCard({ title, data, onPress, ...props }) {
  return (
    <Box {...props}>
      <Text pl={8} color="textLight">
        {title}
      </Text>
      <CardContainer mt={10} onPress={onPress}>
        {data ? (
          <>
            <CardTitle>{data.madde}</CardTitle>
            <CardSummary>{data.anlam}</CardSummary>
          </>
        ) : (
          <ActivityIndicator />
        )}
      </CardContainer>
    </Box>
  )
}

export default SuggestionCard
