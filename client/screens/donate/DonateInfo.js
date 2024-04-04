import React, { useContext, useState } from "react";
import { View, SafeAreaView, Image, Text, StyleSheet, Button } from "react-native";
import Allergies from "../../components/donator/NewDonate/Allergies";
import { useRoute } from "@react-navigation/native";
import { AuthContext } from "../../store/auth-context";
import { Picker } from "@react-native-picker/picker";
import { Alert } from "react-native";
import {CreateOrderAxiosByRecipent } from '../../util/http'
const DonateInfo = () => {
  const route = useRoute();
  const selectedMeal = route.params;
  console.log(`select meal is `);
  console.log(selectedMeal);
  const authContext = useContext(AuthContext);
  const isRecipient = authContext.user && authContext.user.userType === "Recipient";

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  const handleOrderButtonClick = () => {
    Alert.alert(
      "תאשר את ההזמנה",
      `האם אתה בטוח שאתה רוצה לעשות הזמנה של ${quantity} מנות`,
      [
        {
          text: "אוותר הפעם",
          style: "cancel",
        },
        {
          text: "בצע הזמנה",
          onPress: () => {
            console.log("Order confirmed!");
            CreateOrderAxiosByRecipent(selectedMeal.id,authContext.user.id,quantity)
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/images/donationPhotos/cake.png")}
        style={styles.image}
      />
      <View style={styles.containerTexts}>
        <Text style={styles.mealType}>{selectedMeal.mealType}</Text>
        <Text style={styles.dishName}>{selectedMeal.dishName}</Text>
        <View style={styles.amountView}>
          <Text style={styles.amountTitle}>כמות מנות:</Text>
          <Text style={styles.amount}>{selectedMeal.amount}</Text>
        </View>
        <Text style={styles.description}>{selectedMeal.description}</Text>

        <Text style={styles.titleAllrgies}>מכיל</Text>

        <View style={styles.imageAlrgie}>
          {selectedMeal.allergies.map((allergy, index) => (
            <Allergies key={index} name={allergy} />
          ))}
        </View>

        {isRecipient && (
          <View style={styles.recipientView}>
            <Picker
              selectedValue={quantity}
              onValueChange={handleQuantityChange}
              style={styles.picker}
            >
              {[...Array(selectedMeal.amount).keys()].map((value) => (
                <Picker.Item key={value + 1} label={`${value + 1}`} value={value + 1} />
              ))}
            </Picker>
            <Button title="הזמן" onPress={handleOrderButtonClick} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 300,
    height: 200,
    alignSelf: "center",
    borderRadius: 10,
    borderColor: "red",
    marginTop: "15%",
  },
  containerTexts: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 40,
  },
  mealType: {
    fontSize: 30,
    marginTop: 50,
  },
  dishName: {
    marginTop: "2%",
    fontSize: 18,
  },
  imageAlrgie: {
    display: "flex",
    flexDirection: "row",
  },
  description: {
    color: "gray",
    fontSize: 15,
  },
  amountView: {
    flexDirection: "row",
    marginBottom: "5%",
  },
  amount: {
    fontSize: 18,
    marginLeft: 10,
  },
  amountTitle: {
    fontSize: 18,
  },
  titleAllrgies: {
    marginTop: "10%",
  },
  recipientView: {
    padding: 10,
    marginTop: 10,
    width: "50%",
  },
  recipientText: {
    fontWeight: "bold",
    color: "blue",
  },
  quantityText: {
    marginTop: 10,
    fontSize: 16,
  },
  picker: {
    height: 50,
    width: 150,
    marginTop: 5,
  },
});

export default DonateInfo;
