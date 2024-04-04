import React, { useEffect, useContext } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Logo from "../../components/Logo";
import MealItem from "../../components/MealItem";
import { AuthContext } from "../../store/auth-context";
import { GetMealOfDonatorAxios } from "../../util/http";
import { DonationsContext } from "../../store/donation-context";
import { useFocusEffect } from "@react-navigation/native";

const MyDonateList = () => {
  const authCtx = useContext(AuthContext);
  const donationCtx = useContext(DonationsContext);

  const fetchMeals = async () => {
    try {
      const fetchedMeals = await GetMealOfDonatorAxios(authCtx.user.id);
      console.log(`Fetched meals:`, fetchedMeals); // Log fetched meals
      donationCtx.setAllDonations(fetchedMeals);
      console.log(`Donation context:`, donationCtx.donations); // Log donation context
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  };

  // Use useFocusEffect to fetch data when the screen comes into focus
  useFocusEffect(
    React.useCallback(() => {
      fetchMeals();
    }, [authCtx.user.id, donationCtx.setAllDonations])
  );

  const renderMealItem = (itemData) => {
    const item = itemData.item;
    console.log(`hello from my donate list`);
    console.log(item);
    const mealItemProps = {
      id: item.id,
      donatorId: item.donatorId,
      dishName: item.dishName,
      description: item.description,
      image: item.image,
      createdOn: item.createdOn,
      updatedOn: item.updatedOn,
      expriedDate: item.expriedDate,
      amount: item.amount,
      mealType: item.mealType,
      allergies: item.allergies,
      kosher: item.kosher,
    };
    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.donateListContainer}>
      <Logo />
      <FlatList
        data={donationCtx.donations}
        keyExtractor={(item) => item.id.toString()} // Ensure the key is a string
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MyDonateList;

const styles = StyleSheet.create({
  donateListContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    flex: 1,
  },
});
