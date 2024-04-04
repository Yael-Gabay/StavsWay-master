import { useContext, useState } from "react";
import { Image, StyleSheet, Text, View, Pressable, SafeAreaView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../store/auth-context";
import { GetUser } from "../../util/http";
import Profile from "../user/Profile";
const LoginAuth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
   const authCtx = useContext(AuthContext);

   const ClickSignUpForwd = () => {
    navigation.navigate("SignUpKindOfUser");
  };

   const  LoginClickEvent = async() => {
    const user =await GetUser(email, password);

    authCtx.login(user);
    console.log(`the user is ${JSON.stringify(user)}`);
    navigation.navigate(Profile);
  };


   function emailInputHandler(enteredText) {
    setEmail(enteredText);
  }
  function passwordInputHandler(enteredText) {
    setPassword(enteredText);
  }


  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          resizeMode="cover"
          source={require("../../assets/images/loginBatterFile.png")}
        />
        <Text style={styles.logoText}>STAV’S WAY</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.loginHeader}>התחברות</Text>

        <TextInput
          autoCapitalize="none"
          placeholder="אימייל"
          style={styles.input}
          onChangeText={emailInputHandler}
        />
        <TextInput
          autoCapitalize="none"
          placeholder="סיסמא"
          style={styles.input}
          onChangeText={passwordInputHandler}
        />

        <Pressable style={styles.submitBtn} onPress={LoginClickEvent}>
          <Text style={styles.submitBtnText}>התחבר</Text>
        </Pressable>
      </View>

      <View style={styles.socialContainer}>
        <View style={styles.socialButton}>
          {/* Google login button */}
          <Image
            style={styles.socialIcon}
            source={require("../../assets/images/google.png")}
          />
        </View>

        <View style={styles.socialButton}>
          {/* Facebook login button */}
          <Image
            style={styles.socialIcon}
            source={require("../../assets/images/facebook.png")}
          />
        </View>
      </View>

      <View style={styles.registerContainer}>
        <View style={styles.registerWrapper}>
          <Text style={styles.registerText}>הרשמה</Text>
        </View>
            <View style={styles.registerLine} />
            <Pressable onPress={ClickSignUpForwd}>
            <Text style={styles.registerHint}>מעבר לאתר הבית להרשמה</Text>
          </Pressable>

          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#fff",
  },
  loginHeader: {
    fontSize: 22,
    marginRight: 200,
    marginBottom: 10,
    fontWeight: "100"
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  logoImage: {
    width: 100,
    height: 80,
  },
  logoText: {
    fontSize: 30,
    color: "#7ca57e",
  },
  subtitleText: {
    fontSize: 16,
    color: "#7ca57e",
  },
  formContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  input: {
    width: "85%",
    padding: 16,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 3,
    marginBottom: 25,
    textAlign: "right", // Adjust text alignment based on your design
  },
  submitBtn: {
    width: 300,
    padding: 15,
    elevation: 10,
    backgroundColor: "#7ca57e",
    alignItems: "center",
    borderRadius: 18
  },
  submitBtnText: {
    color: "white",
    fontSize: 16,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  socialButton: {
    alignItems: "center"
  },
  socialIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  socialButtonText: {
    fontSize: 16,
  },
  registerContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  registerWrapper: {
    padding: 10,
    marginRight: 200,
  },
  registerText: {
    fontSize: 22,
  },
  registerLine: {


    marginBottom: 10
  },
  registerHint: {
    fontSize: 16,
    padding: 10,
    paddingHorizontal: 50,
    borderColor: "#7ca57e",
    borderRadius: 15,
    borderWidth: 2,

  },
});

export default LoginAuth;
