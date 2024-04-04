import {View,Text,TextInput,StyleSheet} from 'react-native';
import { useState } from 'react';

const NameDonate = ({value,onChangeText}) =>{

    function descriptionInputHandler(enteredText) {
      onChangeText(enteredText);
    }

    
    return(
      <View>
      <Text style={styles.inputTitle} >שם הארוחה:</Text>
          <TextInput
          style={styles.textInput}
          placeholder="תתאר את המאכל "
          onChangeText={descriptionInputHandler}
          value={value}
        />
      </View>
    )
}

export default NameDonate

const styles = StyleSheet.create({
 
  textInput: {
    borderWidth: 1,
    width: 300,
    padding: 16,
    marginLeft:30,
    borderRadius:10
    },
    inputTitle:{
      marginBottom:10,
      marginLeft:30
    }

  });