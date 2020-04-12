import * as React from 'react'
import { StatusBar, ScrollView } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect } from '@react-navigation/native'

import Box from '../components/box'
import Text from '../components/text'
import { ActionButton, ActionButtonTitle } from '../components/action-button'
import { DetailItem } from '../components/detail-item'
import TextLoader from '../components/text-loader'
import { Voice, Hand, Favorite } from '../components/icons'
import theme from '../utils/theme'

function DetailView({ route }) {
  const keyword = route.params?.keyword

  const [data, setData] = React.useState(null)

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
    }, [])
  )

  const getDetailData = async () => {
    const fetchData = await fetch(`https://sozluk.gov.tr/gts?ara=${keyword}`)
    const detail = await fetchData.json()
    setData(detail[0])
  }

  React.useEffect(() => {
    getDetailData()
  }, [])

  return (
    <Box as={SafeAreaView} bg="softRed" flex={1}>
      <Box as={ScrollView} p={16}>
        <Box>
          <Text fontSize={32} fontWeight="bold">
            {keyword}
          </Text>
          <Text color="textLight" fontStyle="italic" mt={8}>
            {data?.anlamlarListe[0].anlam}
          </Text>
        </Box>

        <Box mt={24} flexDirection="row">
          <ActionButton disabled={!data}>
            <Voice width={24} height={24} color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton disabled={!data} ml={12}>
            <Favorite width={24} height={24} color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton disabled={!data} ml="auto">
            <Hand width={24} height={24} color={theme.colors.textLight} />
            <ActionButtonTitle>Türk İşaret Dili</ActionButtonTitle>
          </ActionButton>
        </Box>

        <Box borderRadius="normal" overflow="hidden" mt={32}>
          {data
            ? data.anlamlarListe.map((item) => (
                <DetailItem data={item} key={item.anlam_id} />
              ))
            : [1, 2, 3].map((index) => (
                <DetailItem key={index} border={index !== 1}>
                  <TextLoader />
                  <TextLoader width={200} mt={10} />
                </DetailItem>
              ))}
        </Box>
      </Box>
    </Box>
  )
}

export default DetailView
