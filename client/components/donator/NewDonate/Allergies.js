import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Allergies = ({ name }) => {
  // Map allergy names to corresponding image sources
  console.log(`hello from allrgies the al rgiesn name ${name}`);
  const allergyImages = {
    'gluten': require('../../../assets/images/allrgies/gluten.png'),
    'lactoz': require('../../../assets/images/allrgies/milk.png')

    // Add more allergy names and corresponding image sources as needed
  };

  // Get the image source based on the allergy name
  const imageSource = allergyImages[name] || null;

  return (
    <View>
      {imageSource && (
        <Image
          style={styles.image}
          source={imageSource}
        />
      )}
    </View>
  );
};

export default Allergies;

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    margin: 20,
    borderRadius: 20,
    display: 'flex'
  },
});
