// MealItem.js
import React from "react";
import { View, Pressable, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

function MealItem({
  id,
  donatorId,
  dishName,
  description,
  image,
  createdOn,
  updatedOn,
  expriedDate,
  amount,
  mealType,
  allergies,
  kosher,
}) {
  const navigation = useNavigation();

  function selectMealItemHandler() {
    navigation.navigate("donateDetails", {
      id,
      donatorId,
      dishName,
      description,
      image,
      createdOn,
      updatedOn,
      expriedDate,
      amount,
      mealType,
      allergies,
      kosher,
    });
  }

  return (
    <Pressable
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      onPress={selectMealItemHandler}
    >
      <View style={styles.mealItem}>
        <View style={styles.innerContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.titleBold}>{dishName}</Text>
            <Text style={styles.title}>{description}</Text>
          </View>
          <Image
            style={styles.image}
            source={require('../assets/images/donationPhotos/cake.png')}
            onError={(error) =>
              console.error("Image loading error:", error.nativeEvent.error)
            }
          />
        </View>
      </View>
    </Pressable>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    marginHorizontal: 10,
    marginVertical: 6,
    backgroundColor: "white",
    borderRadius: 20,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 60,
    position:"absolute",
    left:"73%"
  },
  textContainer: {
    marginLeft: -20,
  },
  titleBold: {
    fontWeight: "bold",
  },
  title: {
    color: "gray",
    maxWidth:200
  },
});
