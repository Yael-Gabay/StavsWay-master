
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import NewDonate from '../../screens/donate/NewDonate'
import MyDonateList from '../../screens/donate/MyDonateList';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Profile from '../../screens/user/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();



const DonateListToInfoNav = () => {
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
          name="בית"
          component={NewDonate}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen name="תרומות"
          component={MyDonateList}
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

export { DonateListToInfoNav }; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});