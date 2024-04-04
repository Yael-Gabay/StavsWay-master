// OrderContext.js
import React, { createContext, useContext, useState, useCallback } from 'react';

export const OrderContext = createContext({
  orders: [],
  addOrder: () => {},
  updateOrder: () => {},
  setAllOrders: () => {},
});

export const useOrderContext = () => {
  return useContext(OrderContext);
};

const OrderContextProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const addOrder = useCallback((newOrder) => {
    setOrders((prevOrders) => [...prevOrders, newOrder]);
  }, []);

  const updateOrder = useCallback((orderId, updatedOrder) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, ...updatedOrder } : order
      )
    );
  }, []);

  const setAllOrders = useCallback((newOrders) => {
    setOrders(newOrders);
  }, []);

  const defaultValue = {
    orders,
    addOrder,
    updateOrder,
    setAllOrders,
  };

  return (
    <OrderContext.Provider value={defaultValue}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
