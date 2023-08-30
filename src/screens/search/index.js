import React from 'react'
import { Text } from 'react-native'
import Container from '../../components/Container'

export default function Search() {
  return (
    <Container flex={1} row center middle >
      <Text className='text-base text-black text-center'>Search</Text>
    </Container>
  )
}