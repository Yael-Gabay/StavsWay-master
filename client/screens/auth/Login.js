import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {View, Pressable, StyleSheet, Image, Text, Platform} from "react-native";
import Logo from "../../components/Logo";
import AuthInput from "../../components/ui/AuthInput";
import { AuthContext } from "../../store/auth-context";
import { GetUser } from "../../util/http";

const Login = () => {
  const navigation = useNavigation();
  const authCtx = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function emailInputHandler(enteredText) {
    setEmail(enteredText);
  }
  function passwordInputHandler(enteredText) {
    setPassword(enteredText);
  }
  const loginWithFacebook = () => {
    console.log("Button pressed");
  };

  async function LoginWIthGoogle() {}

  const ClickSignUpForwd = () => {
    navigation.navigate("SignUpKindOfUser");
  };
    const  LoginBtn = async() => {
    const user =await GetUser(email, password);

    authCtx.login(user);
    console.log(`the user is ${JSON.stringify(user)}`);
  };

  return (
    <View style={styles.formContainer}>
      <Logo />
      <Text style={styles.headerText}>תיכנס לפרופיל שלך</Text>
      <View></View>
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
      />
      <Pressable onPress={LoginBtn}>
        <View style={styles.submitBtn}>
          <Text style={styles.submitText}>כניסה</Text>
        </View>
      </Pressable>
      <View style={styles.loginWithConatiner}>
        {/* <Text>או שתתחבר עם:</Text>
        <View style={styles.loginwithBtns}>
          <Pressable onPress={LoginWIthGoogle}>
            <Image
              style={styles.image}
              source={require("../../assets/images/auth/signInGoogle.png")}
            />
          </Pressable>
          <Pressable onPress={LoginWIthGoogle}>
            <Image
              style={styles.image}
              source={require("../../assets/images/auth/signInGoogle.png")}
            />
          </Pressable>
          <Pressable onPress={LoginWIthGoogle}>
            <Image
              style={styles.image}
              source={require("../../assets/images/auth/signInGoogle.png")}
            />
          </Pressable>
        </View> */}

        <View style={styles.signUpContinar}>
          <Text>למשתמשים חדשים </Text>
          <Pressable onPress={ClickSignUpForwd}>
            <Text style={styles.signUpBtn}>להרשמה</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  formContainer: {
    marginLeft: 20,
  },
  headerText: {
    marginVertical: 20,
  },
  textInput: {
    marginBottom: 20,
  },
  submitBtn: {
    backgroundColor: "orange",
    width: "84%",
    padding: 18,

    elevation: 10,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 10,
        shadowRadius: 0.1,
      },
    }),
  },
  submitText: {
    textAlign: "center",
  },
  loginWithConatiner: {
    position: "relative",
    left: "20%",
    top: "12%",
    width: "50%",
  },
  loginwithBtns: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  signUpContinar: {
    position: "relative",
    top: "10%",
    flexDirection: "row",
  },
  signUpBtn: {
    color: "blue",
  },
});
