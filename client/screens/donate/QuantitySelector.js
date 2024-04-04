// QuantitySelector.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const QuantitySelector = ({ onQuantityChange }) => {
  const [amount, setAmount] = useState(1);

  const increaseAmount = () => {
    const newAmount = amount + 1
    setAmount(newAmount);
    onQuantityChange(newAmount)
  };

  const decreaseAmount = () => {
    if (amount > 1) {
      const newAmount = amount - 1
      setAmount(newAmount);
      onQuantityChange(newAmount);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={decreaseAmount} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.amountText}>{amount}</Text>
      <TouchableOpacity onPress={increaseAmount} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
  },
  button: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#007bff',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  amountText: {
    fontSize: 16,
  },
});

export default QuantitySelector;
