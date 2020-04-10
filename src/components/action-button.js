import React from 'react'

import Button from './button'
import Text from './text'

export function ActionButton({ children, ...props }) {
  return (
    <Button
      style={{
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 2 }
      }}
      minWidth="actionButton"
      height="actionButton"
      borderRadius="full"
      bg="white"
      p={8}
      {...props}
    >
      {children}
    </Button>
  )
}

export function ActionButtonTitle({ children, ...props }) {
  return (
    <Text fontWeight="bold" ml={8} mr={8} color="textLight" {...props}>
      {children}
    </Text>
  )
}
