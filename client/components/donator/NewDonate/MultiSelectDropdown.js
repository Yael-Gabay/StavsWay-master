// MultiSelectDropdown.js
import React, { useState } from 'react';
import MultiSelect from 'react-native-multiple-select';
import { View, StyleSheet } from 'react-native';

const MultiSelectDropdown = ({ items, onSelectedItemsChange }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <View style={styles.container}>
      <MultiSelect
        items={items}
        uniqueKey="value"
        onSelectedItemsChange={(items) => {
          setSelectedItems(items);
          onSelectedItemsChange(items);
        }}
        selectedItems={selectedItems}
        selectText="Pick Items"
        searchInputPlaceholderText="Search Items..."
        onChangeInput={(text) => console.log(text)}
        tagRemoveIconColor="#CCC"
        tagBorderColor="#CCC"
        tagTextColor="#CCC"
        selectedItemTextColor="#CCC"
        selectedItemIconColor="#CCC"
        itemTextColor="#000"
        displayKey="label"
        searchInputStyle={{ color: '#CCC' }}
        submitButtonColor="#CCC"
        submitButtonText="Submit"
        styleDropdownMenu={{ marginTop: 32, backgroundColor: 'white' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingHorizontal: 16,
  },
});

export default MultiSelectDropdown;
