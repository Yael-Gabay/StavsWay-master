import React from 'react';
import { Text, View, Pressable, StyleSheet, Platform } from 'react-native';
import { UpdateOrder } from '../../util/http';

const OrderItem = ({ from, to, orderId, distanceKm, status, fetchOrders }) => {
  const handlePress = async () => {
    const volunteerId = 'volunteerCancelled';
    const statusOrderCode = 1;

    try {
      const response = await UpdateOrder(orderId, volunteerId, statusOrderCode);
      console.log(response);
      // Trigger fetchOrders in the parent component
      fetchOrders();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <Text style={styles.labelText}>מקור</Text>
        <Text style={styles.locationText}>{` ${from.city}, ${from.street}, ${from.houseNumber}`}</Text>
        <Text style={styles.phoneNumberText}>{` ${to.phoneNumber}`}</Text>
      </View>

      <View style={styles.locationContainer}>
        <Text style={styles.labelText}>יעד</Text>
        <Text style={styles.locationText}>{` ${to.city}, ${to.street}, ${to.houseNumber}`}</Text>
        <Text style={styles.phoneNumberText}>{` ${to.phoneNumber}`}</Text>
      </View>

      <Pressable
        android_ripple={{ color: '#ccc' }}
        accessibilityRole="button"
        accessibilityLabel={`Order ${status}: From ${from.city} to ${to.city}`}
        onPress={handlePress}>
        <View style={styles.btnContainer}>
          <Text style={styles.btnText}>הסר משלוח</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: '5%', // Adjusted marginHorizontal
    borderRadius: 15,
    width: 300, // Increased width percentage
    height:300,
    elevation: 5,
    ...Platform.select({
        default:{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.2,
          shadowRadius: 2,
        }
        ,ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  locationContainer: {
    marginBottom: 15,
  },
  labelText: {
    fontSize: 18,
    color: '#555',
    marginBottom: 5,
  },
  locationText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  phoneNumberText: {
    fontSize: 14,
    color: '#777',
  },
  btnContainer: {
    backgroundColor: '#ff5252',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 15,
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
