import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Description from '../../components/donator/NewDonate/Description';
import Login from '../../screens/auth/Login';
import SignUp from '../../screens/auth/SignUp';
import PrevSignUp from '../../screens/auth/PrevSignUp';
import SingUpDonator from '../../screens/auth/SingUpDonator';
import loginScreen from '../../screens/auth/Login.auth'

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const SignUpStack = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={loginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpKindOfUser"
          component={PrevSignUp}
          options={{ title: 'Sign Up Kind of User' }}
        />
        <Stack.Screen
          name="signUpFirstStep"
          component={SignUp}
          options={{ title: 'Sign Up First Step' }}
        />
        <Stack.Screen
          name="SignUpFinal"
          component={SingUpDonator}
          options={{ title: 'Sign Up Final' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SignUpStack;