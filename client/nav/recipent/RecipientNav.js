import React from "react";
import { StyleSheet  } from 'react-native';

import AllPlacedOrders from '../../screens/volunteer/AllPlacedOrders'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Profile from '../../screens/user/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import VolunteerOrdersList from "../../screens/volunteer/VolunteerOrdersList";
import AllOpenDonations from "../../screens/recipient/AllOpenDonations";
import MyOrders from '../../screens/recipient/MyOrders'
const BottomTab = createBottomTabNavigator();
;
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};



const RecipientNav = () => {
  return (


      <BottomTab.Navigator
        style={styles.container}
        screenOptions={{
          headerStyle: { backgroundColor: '#ffc72e' },
          headerTintColor: 'white',
          tabBarActiveTintColor: '#ffc72e',
        }}
      >
        <BottomTab.Screen
          name="תרומות"
          component={AllOpenDonations}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen name="הזמנות"
          component={MyOrders}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="hand-heart"
                size={size}
                color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="פרופיל"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </BottomTab.Navigator>
  );
}

export  default RecipientNav ; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});