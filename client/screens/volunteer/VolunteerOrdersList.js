import React, { useEffect, useState, useContext } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import OrderItem from '../../components/volunteer/OrderItem';
import { GetAllOrderOfVolunteer } from '../../util/http';
import { useFocusEffect } from '@react-navigation/native';
import { AuthContext } from '../../store/auth-context';

const VolunteerOrdersList = () => {
  const [orders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const authCtx = useContext(AuthContext);

  const fetchOrders = async () => {
    try {
      // Assuming GetAllOrderOfVolunteer returns the correct data
      const volunteerOrders = await GetAllOrderOfVolunteer(authCtx.user.id);
      console.log(` voulnter order compinent ${volunteerOrders}`);
            console.log(orders);

      setAllOrders(volunteerOrders);
            console.log(orders);

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
    console.log(`hello from list the order item is ${item}`);
    return (
      <OrderItem
        key={id}
        orderId={id}
        donationId={donationId}
        recipientId={recipientId}
        amount={amount}
        volunteerId={volunteerId}
        status={status}
        from={from}
        to={to}
        fetchOrders={fetchOrders} // Pass the fetchOrders function to the child component
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
});

export default VolunteerOrdersList;
