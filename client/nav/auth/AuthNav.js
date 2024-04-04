import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Login from '../../screens/auth/Login';
import SignUp from '../../screens/auth/SignUp';
import LoginScreen from '../../screens/auth/Login.auth'
const Tab = createMaterialTopTabNavigator();

const AuthNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarItemStyle: { width: 100 },
        tabBarStyle: { backgroundColor: 'white' },
        activeColor: "white",
        inactiveColor: "gray",
        barStyle: { backgroundColor: 'white' }
      }
      }>
      <Tab.Screen name="Login" component={LoginScreen} options={{ tabBarLabel: 'כניסה', headerShown: false }} />
      <Tab.Screen name="SignUp" component={SignUp} options={{ tabBarLabel: 'הרשמה' }} />
    </Tab.Navigator >
  );
};

export default AuthNav;
