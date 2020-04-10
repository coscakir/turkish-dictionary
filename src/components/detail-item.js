import React from 'react'

import Box from './box'
import Text from './text'

export function DetailItemContainer({ children, border, ...props }) {
  return (
    <Box
      position="relative"
      bg="white"
      px={28}
      py={20}
      borderRadius="normal"
      {...props}
    >
      {border && (
        <Box
          position="absolute"
          height={1}
          bg="light"
          left={12}
          right={12}
          top={0}
        ></Box>
      )}
      <Box flexDirection="row">
        <Text color="textLight" ml={-14} mr={8}>
          1
        </Text>
        <Text color="red" fontStyle="italic">
          İSİM
        </Text>
      </Box>
      <Box mt={8}>{children}</Box>
    </Box>
  )
}

export function DetailItemTitle({ children }) {
  return <Text fontWeight="600">{children}</Text>
}

export function DetailItemDesc({ children }) {
  return (
    <Text ml={12} mt={12} color="textLight" fontWeight="500">
      {children}
    </Text>
  )
}
