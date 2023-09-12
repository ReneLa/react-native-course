import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { Text } from 'react-native'
import Button from '../../components/Button'
import Container from '../../components/Container'
import { AppRoutes } from '../../navigation/app.routes'

export default function Welcome() {
  const navigation = useNavigation()
 
  const _navigate=()=>{
    navigation.navigate(AppRoutes.SIGN_IN, {
       id:'1234'
    })
  }

  return (
    <Container flex={1} className='relative' >
      <Container flex={0.8} className='w-full bg-[#E67E22]'>

      </Container>
      <Container bgColor='#202123' 
        center
        className='absolute h-80 w-full bottom-0 rounded-t-3xl'
        >
          <Container flex={0.6} center middle>
            <Text className='font-nunito text-3xl'>
              {/* Welcome to Muvi */}
            </Text>
 
          </Container>
          <Container flex={0.4}  middle center className='w-full' >
          <Button bgColor='tomato' onPress={_navigate} className='rounded-md pt-4 pb-4 w-1/2'>
           <Text>Get Started</Text>
          </Button>
          </Container>
      </Container>
    </Container>
  )
}