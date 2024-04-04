import { useContext } from "react";
import { AuthContext } from "../store/auth-context";
import SignUpStack from "../nav/auth/SignUpStack";
import VolunteerNav from "../nav/volunteer/volunteerNav";
import DonatorNav from '../nav/donator/DonatorNav'
import RecipentStack from '../nav/recipent/RecipentStack'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

const NavContainer = () => {
  const authCtx = useContext(AuthContext);
  const Stack = createStackNavigator();
  const getNavigatorForUser = () => {
    if (!authCtx.isAuth) {
      return (
          <SignUpStack/>
      )
    }
    if (authCtx.user && authCtx.user.userType === "Volunteer") {
      return (
          <VolunteerNav/>
      );
    }
    if (authCtx.user && authCtx.user.userType === "Donator") {
      return (
          <DonatorNav/>
      );
    }
    if (authCtx.user && authCtx.user.userType === "Recipient") {
      return (
          <RecipentStack/>
      );
    }
  }
  return (
    <>
      {getNavigatorForUser()}
    </>
  );
};

export default NavContainer;
