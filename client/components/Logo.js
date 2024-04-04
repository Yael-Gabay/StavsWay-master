import {Image,StyleSheet,SafeAreaView} from 'react-native';

const Logo = () =>{

    return(
        <Image
        style={styles.image}
        source={require('../assets/images/stavWayLogo.png')}
      />
    )
}

export default Logo;


const styles = StyleSheet.create({
 
    image: {
      width: 100,
      height: 100,
      alignSelf:"center",  
      

      
    }

  });