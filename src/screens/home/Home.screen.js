import React from 'react'
import { Text } from 'react-native'
import Container from '../../components/Container'

export default function Home() {
  return (
    <Container flex={1} row center middle>
      <Text className='text-base text-white text-center'>Home</Text>
    </Container>
  )
}