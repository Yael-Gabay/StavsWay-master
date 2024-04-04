import React, {useContext, useState} from "react";
import {Alert, Pressable, StyleSheet, Text, View,} from "react-native";
import AuthInput from "../../components/ui/AuthInput";
import {AuthContext} from "../../store/auth-context";
import {FormContext} from "../../store/signup-form-context";
import {CreateUserAxios} from "../../util/http";

const SingUpDonator = () => {
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [floor, setFloor] = useState("");
  const authCtx = useContext(AuthContext);
  const { formData } = useContext(FormContext);

  const CityInputHandler = (enteredText) => {
    setCity(enteredText);
  };
  function StreetInputHandler(enteredText) {
    setStreet(enteredText);
  }
  function HouseNumberInputHandler(enteredText) {
    setHouseNumber(enteredText);
  }
  function floorInputHandler(enteredText) {
    setFloor(enteredText);
  }

  const handleSubmission = async() => {
    if (!city || !street || !houseNumber || !floor) {
      Alert.alert("חסרים שדות בבקשה תמלא את כל השדות");
      return;
    }

    formData.location={city:city,floor: floor, houseNumber: houseNumber, street: street};
    console.log(JSON.stringify(formData));
    const user = await CreateUserAxios(formData);
    authCtx.login(user);

  };

  return (
    <View style={styles.formContainer}>
      <AuthInput
        onUpdateValue={CityInputHandler}
        value={city}
        style={styles.textInput}
        placeHolder={"עיר"}
      />
      <AuthInput
        onUpdateValue={StreetInputHandler}
        value={street}
        style={styles.textInput}
        placeHolder={"רחוב"}
      />
      <AuthInput
        onUpdateValue={HouseNumberInputHandler}
        value={houseNumber}
        style={styles.textInput}
        placeHolder={"מספר בית"}
      />
      <AuthInput
        onUpdateValue={floorInputHandler}
        value={floor}
        style={styles.textInput}
        placeHolder={"קומה"}
      />

      <Pressable style={styles.button} onPress={handleSubmission}>
        <Text style={styles.buttonText}>הירשם</Text>
      </Pressable>
    </View>
  );
};

export default SingUpDonator;

const styles = StyleSheet.create({
  textInput: {
    marginLeft: 30,
    marginBottom: 10,
  },
  container: {
    flex: 1,
  },
  formContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: "orange",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
  },
  phoneInput: {
    marginLeft: 30,
    marginBottom: 10,
    width: "85%",
    padding: 16,
    borderRadius: 2,
    backgroundColor: "white",
    elevation: 10,
  },
});
