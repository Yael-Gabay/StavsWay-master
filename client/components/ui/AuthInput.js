import {View, Pressable, Text, Image, StyleSheet, TextInput, Platform} from 'react-native';



const AuthInput = ({onUpdateValue, value,style,placeHolder,isPass}) => {

    return (
        <TextInput
            style={[styles.input , style]}
            autoCapitalize="none"
            onChangeText={onUpdateValue}
            value={value}
            placeholder={placeHolder}
            secureTextEntry={isPass}
        />
    )
}


export default AuthInput;

const styles = StyleSheet.create({

    input: {
        width: "85%",
        padding: 16,
        borderRadius: 10,
        backgroundColor: "white",
        elevation: 3,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 10,
                shadowRadius: 0.1,
            },
        }),
    },
    inputTitle: {
        marginBottom: 10,
        marginLeft: 30
    },
    inputInvalid: {
        backgroundColor: "red",

    }
})