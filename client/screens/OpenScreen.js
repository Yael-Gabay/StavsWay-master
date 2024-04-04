import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const OpenScreen = () => {

  return (
    <View style={styles.container}>
      <View style={styles.donator}>
        <View style={styles.iphone1415ProMax7}>
          <View style={styles.vectorParent}>
            <Image
              style={styles.groupChild}
              source={require('../assets/images/openScreenLogo.png')} // Adjust the path accordingly
            />
            <Text style={styles.stavsWay}>STAV’S WAY</Text>
          </View>
          <View style={styles.iphone1415ProMax7Child} />
        </View>
      </View>
    </View>
  );
};

export default OpenScreen

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 1440,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    position: "relative",
    bottom: 400,
    right: 750
  },
  image: {
    width: 150,
    height: 150,
    position: "relative",
    left: 120,
    top: 300,
    borderRadius: 100
  },
  groupChild: {
    position: 'absolute',
    top: 0,
    left: '50%',
    marginLeft: -58.5, // Adjusted from calc(50% - 58.5px)
    width: 7.33 * 16, // Adjusted from 7.33rem
    height: 6.77 * 16, // Adjusted from 6.77rem
    objectFit: 'cover' // Adjusted from object-fit
  },
  stavsWay: {
    position: 'absolute',
    color: "white",
    top: 120, // Adjusted from 7.33rem
    fontSize: 40,
    letterSpacing: 0.06 * 16 // Adjusted from 0.06em
  },
  stavsWayText: {
    top: 7.33 * 4, // Adjusted from 7.33rem
    left: 0,
    letterSpacing: 0.06 * 16 // Adjusted from 0.06em
  },
  aPathOf: {
    top: 10.77 * 16, // Adjusted from 10.77rem
    left: 0.13 * 16, // Adjusted from 0.13rem
    fontSize: 1 * 16, // Adjusted from 1rem
    letterSpacing: 0.3 * 16 // Adjusted from 0.3em
  },
  vectorParent: {
    position: 'absolute',
    top: 23.11 * 14, // Adjusted from 23.11rem
    left: '50%',
    marginLeft: -121, // Adjusted from calc(50% - 121px)
    width: 15.06 * 16, // Adjusted from 15.06rem
    height: 12.02 * 16 // Adjusted from 12.02rem
  },
  iphone1415ProMax7Child: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    borderRadius: 50,
    backgroundColor: '#d9d9d9',
    width: 0.44 * 16, // Adjusted from 0.44rem
    height: 0.44 * 16, // Adjusted from 0.44rem
    opacity: 0
  },
  iphone1415ProMax7: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    backgroundColor: '#7ca57e',
    width: 26.88 * 16, // Adjusted from 26.88rem
    height: 100 * 16, // Adjusted from 58.25rem
    overflow: 'hidden'
  },
  donator: {
    position: 'relative',
    backgroundColor: '#fff',
    width: '100%',
    height: 3200, // Adjusted from 58.25rem
    overflow: 'hidden',
    textAlign: 'left',
    fontSize: 3 * 16, // Adjusted from 3rem
    color: '#fff',
  },
});