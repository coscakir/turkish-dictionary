import * as React from 'react'
import { StatusBar, ScrollView } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect } from '@react-navigation/native'

import Box from '../components/box'
import Text from '../components/text'
import { ActionButton, ActionButtonTitle } from '../components/action-button'
import {
  DetailItemContainer,
  DetailItemTitle,
  DetailItemDesc
} from '../components/detail-item'

import { VoiceSolid, Hand, Favorite } from '../components/icons'
import theme from '../utils/theme'

function DetailView() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
    }, [])
  )

  return (
    <Box as={SafeAreaView} bg="softRed" flex={1}>
      <Box as={ScrollView} p={16}>
        <Box>
          <Text fontSize={32} fontWeight="bold">
            Kalem
          </Text>
          <Text color="textLight" fontStyle="italic" mt={8}>
            Türkçe kalem
          </Text>
        </Box>

        <Box mt={24} flexDirection="row">
          <ActionButton>
            <VoiceSolid width={24} height={24} color={theme.colors.red} />
          </ActionButton>
          <ActionButton ml={12}>
            <Favorite width={24} height={24} color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton ml="auto">
            <Hand width={24} height={24} color={theme.colors.textLight} />
            <ActionButtonTitle>Türk İşaret Dili</ActionButtonTitle>
          </ActionButton>
        </Box>

        <Box mt={32}>
          <DetailItemContainer>
            <DetailItemTitle>
              Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerde araç:
            </DetailItemTitle>
            <DetailItemDesc>
              "Kâğıt, kalem, mürekkep, hepsi masanın üstündedir." - Falih Rıfkı
              Atay
            </DetailItemDesc>
          </DetailItemContainer>
          <DetailItemContainer border>
            <DetailItemTitle>
              Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerde araç:
            </DetailItemTitle>
            <DetailItemDesc>
              "Kâğıt, kalem, mürekkep, hepsi masanın üstündedir." - Falih Rıfkı
              Atay
            </DetailItemDesc>
          </DetailItemContainer>
          <DetailItemContainer border>
            <DetailItemTitle>
              Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerde araç:
            </DetailItemTitle>
            <DetailItemDesc>
              "Kâğıt, kalem, mürekkep, hepsi masanın üstündedir." - Falih Rıfkı
              Atay
            </DetailItemDesc>
          </DetailItemContainer>
        </Box>
      </Box>
    </Box>
  )
}

export default DetailView
