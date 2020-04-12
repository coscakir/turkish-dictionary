import React from 'react'

import Box from './box'
import Text from './text'

export function DetailItem({ data, children, border, ...props }) {
  const type = (data?.ozelliklerListe &&
    data.ozelliklerListe.map((_) => _.tam_adi.toUpperCase())) || ['İSİM']

  return (
    <Box position="relative" bg="white" px={28} py={20} {...props}>
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
      {data ? (
        <Box>
          <Box flexDirection="row">
            <Text color="textLight" ml={-14} mr={8}>
              {data.anlam_sira}
            </Text>

            <Text color="red" fontStyle="italic">
              {type.join(', ')}
            </Text>
          </Box>
          <Box mt={8}>
            <Text fontWeight="600">{data.anlam}</Text>
            {data.orneklerListe &&
              data.orneklerListe.map((item) => (
                <Box key={item.ornek_id}>
                  <Text ml={12} mt={12} color="textLight" fontWeight="500">
                    {`"${item.ornek}"`}
                    <Text fontWeight="700" color="textLight">
                      {item.yazar_id !== '0' && ` - ${item.yazar[0].tam_adi}`}
                    </Text>
                  </Text>
                </Box>
              ))}
          </Box>
        </Box>
      ) : (
        children
      )}
    </Box>
  )
}
