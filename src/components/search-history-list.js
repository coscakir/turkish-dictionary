import React from 'react'
import { FlatList } from 'react-native'

import Box from './box'
import Text from './text'
import { SimpleCardTitle, SimpleCardContainer } from './simple-card'

function SearchHistoryList({ data }) {
  return (
    <FlatList
      style={{ padding: 16 }}
      data={data}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <Text color="textLight" mb={10}>
          Latest Search
        </Text>
      }
      renderItem={({ item }) => (
        <Box py={6}>
          <SimpleCardContainer>
            <SimpleCardTitle>{item.title}</SimpleCardTitle>
          </SimpleCardContainer>
        </Box>
      )}
    />
  )
}

export default SearchHistoryList
