import React from 'react'

import Box from './box'
import Text from './text'
import { CardContainer, CardTitle, CardSummary } from './card'
import TextLoader from './text-loader'

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
          <Box>
            <TextLoader />
            <TextLoader width={200} mt={10} />
          </Box>
        )}
      </CardContainer>
    </Box>
  )
}

export default SuggestionCard
