// CheckboxDropdown.js
import React, { useState } from 'react';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Adjust the icon library based on your preference

const CheckboxDropdown = ({ items, onSelection }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.dropdownContainer}>
        <SectionedMultiSelect
          items={items}
          uniqueKey="id"
          subKey="children"
          selectText="תבחר את האלרגיות ואת הכשרות"
          showDropDowns={true}
          readOnlyHeadings={true}
          onSelectedItemsChange={(selected) => {
            setSelectedItems(selected);
            onSelection(selected);
          }}
          selectedItems={selectedItems}
        IconRenderer={Icon} // Provide the IconRenderer prop with the imported Icon component
          confirmText="Custom Confirm" // Change the text of the confirm button
          confirmTextColor="#ff0000"
                    styles={{
            container: {
              // You can adjust other styles here as needed
              width:250,
              maxHeight:300,
              position:"relative",
              top:300,
              left:50,
              
            },
            selectToggle: {
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#ccc',
              padding: 10,
            },
            item: {
              paddingVertical: 10,
              paddingHorizontal: 15,
            },
            itemText: {
              fontSize: 16,
            },
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: '#333',
  },
  dropdownContainer: {
    height: 50, // Adjust the height as needed
  },
});

export default CheckboxDropdown;
