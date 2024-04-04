// AddPhoto.js
import React, { useState } from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';
import { launchCameraAsync } from 'expo-image-picker';

const AddPhoto = ({ onSelect }) => {
  const [imageUri, setImageUri] = useState(null);

  async function takeImageHandler() {
    try {
      const result = await launchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.5,
      });

      if (!result.canceled) {
        const imageUri = result.assets[0].uri;
        setImageUri(imageUri);
        onSelect(imageUri); // Use onSelect instead of onImageSelect
      }
    } catch (error) {
      console.error('Error taking image:', error);
    }
  }



  return (
    <Pressable onPress={takeImageHandler}>
      <Image
        style={styles.image}
        source={imageUri ? { uri: imageUri } : require('../../../assets/images/addDonateScreen/addPhoto.png')}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginTop: 30,
    marginLeft: 15,
  },
});

export default AddPhoto;
