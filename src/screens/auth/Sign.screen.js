import { useNavigation } from '@react-navigation/native'
import React,{useState} from 'react'
import { Image, KeyboardAvoidingView,View, Platform, StyleSheet, Text, TextInput } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Button from '../../components/Button'
import Container from '../../components/Container'
import { AppRoutes } from '../../navigation/app.routes'
import { useController, useForm, Controller } from 'react-hook-form'

export default function SignIn() {
  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm();
  const navigation = useNavigation()
 
  const onSubmit =(data)=>{
    console.log(data)
    navigation.navigate(AppRoutes.MAIN_DRAWER)
  }

  return (
    <Container flex={1} >
      <KeyboardAvoidingView 
       behavior={Platform.OS === "ios" ? "padding" : "height"}
       keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
       enabled
      style={{flex:1, flexDirection:'column'}}>
      <Container flex={0.6} className=' relative w-full'>
       <Image source={require('../../../assets/images/poster.png')} 
       style={{flex:1, height:'100%', width:'100%'}}
       />
       <LinearGradient 
       colors={['transparent', 'rgba(32, 33, 35,0.4)', 'rgba(32, 33, 35,1)']} 
       style={StyleSheet.absoluteFill}
       className='absolute z-10'
       />
     </Container>
    <Container flex={0.4} className='px-6 justify-around'>
     <Text 
     className='font-nunito text-white text-2xl font-semibold ' 
     >
      Login
      </Text>
     <Container className=''>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            className='w-full text-white text-base font-nunito h-10 border-b-2 border-b-neutral-700 pb-3 mb-5' 
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            placeholderTextColor='#fff'
            placeholder='Email'
            value={value}
          />
        )}
        name="email"
        rules={{ required: true }}
      />   
      <Controller
       control={control}
       render={({field: { onChange,value, onBlur}})=>(
         <TextInput 
         value={value}
         onChangeText={e=>onChange(e)}
         onBlur={onBlur}
         placeholder='Password'
         secureTextEntry
         placeholderTextColor='#fff'
         className='w-full text-white text-base font-nunito h-10 border-b-2 border-b-neutral-700 pb-3 mb-5'
        />
       )}
       name='password'
       rules={{ required: true }}
      />
     </Container>
     <Container middle center>
       <Button bgColor='tomato' 
         onPress={handleSubmit(onSubmit)} 
        className='rounded-md pt-4 pb-4 w-1/2 mb-4'>
        <Text>Login</Text>
       </Button>
     </Container>
    </Container>
    </KeyboardAvoidingView>

    </Container>
  )
}


