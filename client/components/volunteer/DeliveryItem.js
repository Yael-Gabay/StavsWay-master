import { Text, View, Pressable, StyleSheet, Platform } from "react-native";
import { UpdateOrder } from "../../util/http";
import { AuthContext } from "../../store/auth-context";
import React, { useContext } from "react";

const DeliveryItem = ({ from, to, orderId, distanceKm, status, refetchOrders, amount }) => {
  const authCtx = useContext(AuthContext);

  const handlePress = async () => {
    const volunteerId = authCtx.user.id;
    const statusOrderCode = 2;

    try {
      const response = await UpdateOrder(orderId, volunteerId, statusOrderCode);
      console.log(response);
      // Trigger refetchOrders in the parent component
      refetchOrders();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.fromToText}>{`מקור: ${from.city}, ${from.street}, ${from.houseNumber}`}</Text>
      <Text style={styles.fromToText}>{`יעד: ${to.city}, ${to.street}, ${to.houseNumber}`}</Text>
      <Text style={styles.fromToText}>{`כמות: ${amount}`}</Text>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        accessibilityRole="button"
        accessibilityLabel={`Order ${status}: From ${from.city} to ${to.city}`}
        onPress={handlePress}
      >
        <View style={styles.btnView} >
          <Text style={styles.btnText}>הוסף משלוח</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default DeliveryItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: "10%",
    marginVertical: "4%",
    marginHorizontal: "5%",
    borderRadius: 30,
    elevation: 10,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 10,
        shadowRadius: 0.1,
      },
    }),
  },
  fromToText: {
    fontSize: 19,
  },
  btnView: {
    padding: 10,
    backgroundColor: "#ffc72e",
    borderRadius: 10,
    width: "50%",
    marginLeft: 50,
    marginTop: 10,
  },
  btnText: {
    color: "white"
  }
});
