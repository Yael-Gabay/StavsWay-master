import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useContext } from "react";

import AddPhoto from "../../components/donator/NewDonate/AddPhoto";
import Description from "../../components/donator/NewDonate/Description";
import NameDonate from "../../components/donator/NewDonate/NameDonate";
import QuantitySelector from "./QuantitySelector";
import CheckboxDropdown from "../../components/donator/NewDonate/CheckboxDropdown";
import { AuthContext } from "../../store/auth-context";
import saveDonationWithImage from "../../util/PostNewDonation";
const NewDonate = () => {
  const authCtx = useContext(AuthContext);

  // State for form fields
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null); // Add image state
  // Add more state variables as needed

  // Checkbox items for allergies and kashrut
  const checkboxItems = [
    {
      id: 1,
      name: "אלרגיות",
      children: [
        { id: "gluten", name: "מכיל גלוטן" },
        { id: "lactoz", name: "מכיל לקטוז" },
      ],
    },
    {
      id: 2,
      name: "כשרות",
      children: [{ id: "kasher", name: "כשרות רגילה" }],
    },
    // Add more sections and items as needed
  ];

  // Quantity change handler
  const handleQuantityChange = (selectedQuantity) => {
    setQuantity(selectedQuantity);
  };

  // Selection change handler
  const handleSelection = (items) => {
    setSelectedItems(items);
    // You can perform any additional actions here based on the selected items
  };

  // Image selection handler
  const handleImageSelect = (image) => {
    setSelectedImage(image);
    // You can perform any additional actions here based on the selected image
  };
function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}
  // Submit handler
  const handleSubmit = async () => {
    // Perform actions with the form data

    const donationObj = {
      donatorId: authCtx.user.id,
      dishName: name,
      description: description,
      image: selectedImage,
      createdOn: getCurrentDate(),
      updatedOn: getCurrentDate(),
      expriedDate:getCurrentDate(), 
      amount: quantity,
      mealType: "צהריים",
      allergies: selectedItems,
      kosher: [],
    };
    await saveDonationWithImage(
      donationObj.donatorId,
      donationObj.allergies,
      donationObj.amount,
      donationObj.createdOn,
      donationObj.description,
      donationObj.dishName,
      donationObj.expriedDate,
      donationObj.image,
      donationObj.kosher,
      donationObj.mealType,
      donationObj.updatedOn,
      selectedImage
    );
  };

  return (
    <View style={styles.addDonateContainer}>
      <NameDonate value={name} onChangeText={setName} />
      <Description value={description} onChangeText={setDescription} />

      <View style={styles.dropdownContainer}>
        <CheckboxDropdown items={checkboxItems} onSelection={handleSelection} />
      </View>

      <QuantitySelector onQuantityChange={handleQuantityChange}/>

      <AddPhoto onSelect={handleImageSelect} />

      {/* {selectedImage && (
        <View style={styles.previewContainer}>
          <Image source={{ uri: selectedImage }} style={styles.previewImage} />
        </View>
      )} */}

      <Pressable
        style={styles.submitBtn}
        onPress={handleSubmit}
        android_ripple={{ color: "#5cb562" }}
      >
        <Text style={styles.btnText}>בצע תרומה</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  addDonateContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  dropdownContainer: {
    marginVertical: 20,
  },
  previewContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  previewImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  submitBtn: {
    padding: 16,
    backgroundColor: "#5cb562",
    borderRadius: 20,
    alignItems: "center",
    marginTop: 40,
  },
  btnText: {
    color: "white",
    fontSize: 18,
  },
});

export default NewDonate;
