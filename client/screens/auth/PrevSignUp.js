import React, { useContext, useEffect } from "react";
import { View, Pressable, StyleSheet, Image,Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { FormContext } from '../../store/signup-form-context';

const PrevSignUp = () => {
  const navigation = useNavigation();
  const { formData, updateFormData } = useContext(FormContext);

  useEffect(() => {
  }, [formData]);

  const chooseTypeOfUser = (userType) => {
    updateFormData("userType", userType);
    console.log("Selected userType:", userType);
    console.log("Selected userType:", formData.userType);

    // Optionally, you can navigate to the next step in your form
    navigation.replace("signUpFirstStep");
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.item} onPress={() => chooseTypeOfUser("Donator")}>
        <View style={[styles.center, styles.shadow, styles.imageContainer]}>
          <Image
            style={styles.image}
            source={require("../../assets/images/auth/food-donation.png")}
            
          />
          <Text  style={styles.textBtn}>הרשמה לתורם</Text>
        </View>
      </Pressable>

      <Pressable style={styles.item} onPress={() => chooseTypeOfUser("Volunteer")}>
        <View style={[styles.center, styles.shadow, styles.imageContainer]}>
          <Image
            style={styles.image}
            source={require("../../assets/images/auth/delivery-icon.png")}
          />
            <Text style={styles.textBtn}>הרשמה למתנדב</Text>

        </View>
      </Pressable>
    </View>
  );
};

export default PrevSignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft:30
  },
  item: {
    width: "80%",
    height: "30%",
    marginBottom: "10%",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 250,
    height: 250,
    borderRadius: 20,  // Make it circular
    backgroundColor: "#FFF",  // Add background color
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,  // Make it circular
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textBtn:{
    fontSize:18,
    marginTop:10
  }
});
