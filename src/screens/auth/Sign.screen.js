import {useNavigation} from "@react-navigation/native";
import React from "react";
import {Controller, useForm} from "react-hook-form";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Button from "../../components/Button";
import Container from "../../components/Container";
import {connect, useDispatch, useSelector} from "react-redux";
import {onChangeEmail} from "../../redux-state/actions/user.actions";

function SignIn() {
  const {token, email} = useSelector(({user}) => user);
  const dispatch = useDispatch();
  const {handleSubmit, control} = useForm();
  const navigation = useNavigation();

  const onSubmit = data => {
    dispatch(onChangeEmail(data.email));
    // navigation.navigate(AppRoutes.MAIN_DRAWER);
  };
  console.log(email);
  return (
    <Container flex={1}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
        enabled
        style={{flex: 1, flexDirection: "column"}}>
        <Container flex={0.6} className=" relative w-full">
          <Image
            source={require("../../../assets/images/poster.png")}
            style={{flex: 1, height: "100%", width: "100%"}}
          />
          <LinearGradient
            colors={[
              "transparent",
              "rgba(32, 33, 35,0.4)",
              "rgba(32, 33, 35,1)",
            ]}
            style={StyleSheet.absoluteFill}
            className="absolute z-10"
          />
        </Container>
        <Container flex={0.4} className="px-6 justify-around">
          <Text className="font-nunito text-white text-2xl font-semibold ">
            Login
          </Text>
          <Container className="">
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  className="w-full text-white text-base font-nunito h-10 border-b-2 border-b-neutral-700 pb-3 mb-5"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  placeholderTextColor="#fff"
                  placeholder="Email"
                  value={value}
                />
              )}
              name="email"
              rules={{required: true}}
            />
            <Controller
              control={control}
              render={({field: {onChange, value, onBlur}}) => (
                <TextInput
                  value={value}
                  onChangeText={e => onChange(e)}
                  onBlur={onBlur}
                  placeholder="Password"
                  secureTextEntry
                  placeholderTextColor="#fff"
                  className="w-full text-white text-base font-nunito h-10 border-b-2 border-b-neutral-700 pb-3 mb-5"
                />
              )}
              name="password"
              rules={{required: true}}
            />
          </Container>
          <Container middle center>
            <Button
              bgColor="tomato"
              onPress={handleSubmit(onSubmit)}
              className="rounded-md pt-4 pb-4 w-1/2 mb-4">
              <Text>Save Email</Text>
            </Button>
          </Container>
        </Container>
        <ChildComponent email={email} />
      </KeyboardAvoidingView>
    </Container>
  );
}

const ChildComponent = ({}) => {
  const {token, email} = useSelector(({user}) => user);
  return (
    <View className="w-full h-12 items-center justify-center bg-blue-500">
      <Text>{email}</Text>
    </View>
  );
};

export default SignIn;
