import React, { useEffect, useState, useContext } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import {GetAllPlacedOrderAxios, getDonationById} from '../../util/http';
import DeliveryItem from '../../components/volunteer/DeliveryItem';
import { OrderContext } from '../../store/order-context';
import { useFocusEffect } from '@react-navigation/native';

const AllPlacedOrders = () => {
  const { orders, setAllOrders } = useContext(OrderContext);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const placedOrders = await GetAllPlacedOrderAxios();
      setAllOrders(placedOrders);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching orders:', error);
      setLoading(false);
    }
  };

  // Use useFocusEffect to fetch data when the screen comes into focus
  useFocusEffect(
    React.useCallback(() => {
      fetchOrders();
    }, [setAllOrders])
  );

  const renderOrderItem = ({ item }) => {
    const { id, donationId, recipientId, amount, volunteerId, status, from, to } = item;
    return (
      <DeliveryItem
        from={from}
        to={to}
        orderId={id}
        key={id}
        status={status}
        donationId={donationId}
        recipientId={recipientId}
        amount={amount}
        volunteerId={volunteerId}


        refetchOrders={fetchOrders} // Pass the refetch function to the child component
      />
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

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
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default AllPlacedOrders;
