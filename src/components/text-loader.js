import React from 'react'
import Box from './box'

export default function TextLoader({ ...props }) {
  return <Box bg="light" width={100} height={16} {...props} />
}
