import { DonateListToInfoNav } from "./Donatelistnav";
import { createStackNavigator } from "@react-navigation/stack";
import DonateInfo from "../../screens/donate/DonateInfo";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

const Stack = createStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const DonatorNav = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="myDpnateList"
          component={DonateListToInfoNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="donateDetails"
          component={DonateInfo}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default DonatorNav;
