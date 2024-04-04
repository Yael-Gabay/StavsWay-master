import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AuthInput from "../../components/ui/AuthInput";
import { FormContext } from "../../store/signup-form-context";
import { AuthContext } from "../../store/auth-context";
import { CreateUserAxios } from "../../util/http";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [selectedGender, setSelectedGender] = useState(null);
  const { formData } = useContext(FormContext);
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const authCtx = useContext(AuthContext);

  const phoneNumberInputHandler = (enteredText) => {
    setPhoneNumber(enteredText);
  };
  function firstNameInputHandler(enteredText) {
    setFirstName(enteredText);
  }
  function lastNameInputHandler(enteredText) {
    setLastName(enteredText);
  }
  function emailInputHandler(enteredText) {
    setEmail(enteredText);
  }
  function passwordInputHandler(enteredText) {
    setPassword(enteredText);
  }
  function secondPasswordInputHandler(enteredText) {
    setSecondPassword(enteredText);
  }

  const isEmailValid = () => {
    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  function handleGenderSelection(gender) {
    setSelectedGender(gender);
  }

  const handleSubmission = async () => {
  // Check if any required field is empty
  if (!firstName || !lastname || !email || !password || !secondPassword || !phoneNumber || !selectedGender) {
    Alert.alert("Missing Information", "Please fill in all the required fields.");
    return;
  }

  if (!isEmailValid()) {
    Alert.alert("Invalid Email", "Please enter a valid email address.");
    return;
  }

  formData.firstName = firstName;
  formData.password = password;
  formData.lastName = lastname;
  formData.gender = selectedGender;
  formData.email = email;
  formData.phoneNumber = phoneNumber;
  formData.approvedType = true;
  console.log(`usertype: ${formData}`)
  if (formData.userType === "Volunteer") {
    formData.location = {}
    const user = await CreateUserAxios(formData);
    authCtx.login(user);

    console.log(`auth ctx is ${authCtx.user}`)
  } else {
    authCtx.user=formData
    console.log("Forward to Next Step:", formData);
      navigation.navigate("SignUpFinal");
  }
};


  return (
    <View style={styles.container}>
      <Text>הירשם לחשבון:</Text>
      <View style={styles.genderContainer}>
        <Pressable onPress={() => handleGenderSelection("Male")}>
          <Image
            style={[
              styles.image,
              selectedGender === "Male" && styles.selectedImage,
            ]}
            source={require("../../assets/images/auth/male.png")}
          />
        </Pressable>
        <Pressable onPress={() => handleGenderSelection("Female")}>
          <Image
            style={[
              styles.image,
              selectedGender === "Female" && styles.selectedImage,
            ]}
            source={require("../../assets/images/auth/female.png")}
          />
        </Pressable>
        {formData.userType === "Donator" && (
          <Pressable onPress={() => handleGenderSelection("Organization")}>
            <Image
              style={[
                styles.image,
                selectedGender === "Organization" && styles.selectedImage,
              ]}
              source={require("../../assets/images/auth/organization.png")}
            />
          </Pressable>
        )}
      </View>

      <View style={styles.formContainer}>
        <AuthInput
          onUpdateValue={firstNameInputHandler}
          value={firstName}
          style={styles.textInput}
          placeHolder={"שם פרטי"}
        />
        <AuthInput
          onUpdateValue={lastNameInputHandler}
          value={lastname}
          style={styles.textInput}
          placeHolder={"שם משפחה"}
        />
        <AuthInput
          onUpdateValue={emailInputHandler}
          value={email}
          style={styles.textInput}
          placeHolder={"אימייל"}
        />
        <AuthInput
          onUpdateValue={passwordInputHandler}
          value={password}
          style={styles.textInput}
          placeHolder={"סיסמא"}
          secureTextEntry={true} // or secureTextEntry
          isPass={true}

        />
        <AuthInput
          onUpdateValue={secondPasswordInputHandler}
          value={secondPassword}
          style={styles.textInput}
          placeHolder={"הקש סיסמא שוב"}
          isPass={true}

        />
        <TextInput
          style={styles.phoneInput}
          placeholder={"מספר טלפון"}
          onChangeText={phoneNumberInputHandler}
          value={phoneNumber}
          keyboardType="phone-pad"
        />
        {formData.userType === "Volunteer" ? (
          <Pressable style={styles.button} onPress={handleSubmission}>
            <Text style={styles.buttonText}>הירשם</Text>
          </Pressable>
        ) : (
          <Pressable style={styles.button} onPress={handleSubmission}>
            <Text style={styles.buttonText}>לשלב הבא</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default SignUp;

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
  image: {
    width: 64,
    height: 64,
    margin: 20,
    borderRadius: 20,
    borderWidth: 2, // Add border width
    borderColor: "transparent", // Initially transparent
  },
  selectedImage: {
    borderColor: "gray", // Border color when selected
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
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
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 3,
  },
});
