// MyOrders.js

import React, { useEffect, useState, useContext } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

import { FetchOrdersForRecipient } from "../../util/http";
import { AuthContext } from "../../store/auth-context";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const authContext = useContext(AuthContext);
  const recipientId = authContext.user.id;
  // OrderStatus.js

const OrderStatus = {
  1: {
    value: 'הזמנה אושרה',
  },
  2: {
    value: 'הזמנה נלקחה ',
  },
  3: {
    value: 'הזמנה הושלמה',
  }
};



  useEffect(() => {
    // Fetch orders when the component mounts
    const fetchData = async () => {
      const ordersData = await FetchOrdersForRecipient(recipientId);
      setOrders(ordersData);
    };

    fetchData();
  }, [recipientId]);

  const renderOrderItem = ({ item }) => (
    <View style={styles.orderItem}>
      <Image  source={require("../../assets/images/donationPhotos/cake.png")}  style={styles.orderImage} />
      <View style={styles.orderDetails}>
        <Text style={styles.dishName}>{item.donationId.dishName}</Text>
        <Text style={styles.description}>{item.donationId.description}</Text>
        <Text style={styles.amount}>{`כמות: ${item.amount}`}</Text>
        <Text style={styles.location}>{`מאיפה מגיע: ${item.from.city}`}</Text>
        <Text style={styles.status}>{`סטטוס: ${OrderStatus[item.status].value}`}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderOrderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    
  },
orderItem: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 16,
  backgroundColor: "#fff",
  padding: 16,
  shadowColor: "#000",
  borderColor:"white",
  borderWidth:2,
  borderRadius:20,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.2,
  shadowRadius: 3.84,
  elevation: 5,
},

  orderImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  orderDetails: {
    flex: 1,
    marginLeft:18

  },
  dishName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  description: {
    color: "gray",
    marginBottom: 4,
  },
  amount: {
    fontSize: 16,
    marginBottom: 4,
  },
  location: {
    color: "green",
    marginBottom: 4,
  },
  status: {
    color: "blue",
  },
});

export default MyOrders;
