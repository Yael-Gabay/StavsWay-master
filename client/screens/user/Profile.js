import {View, Image, Text, FlatList, StyleSheet, Pressable} from 'react-native';
import { AuthContext } from "../../store/auth-context";
import { useContext, useState } from "react";

const Profile = () => {
    const authCtx = useContext(AuthContext);
    console.log(authCtx);
    return (

        <View style={styles.mainContainer}>
            <View style={styles.topRadiusContainer}>


            </View>
            <View style={styles.radiusContinerHeader} >

            </View>
            <View style ={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../../assets/images/profile/userAvatar.png')}
                />
            </View>


            <View style={styles.detailContainer}>
                <Text style={styles.TitlesDetails}>שם</Text>
                <Text style={styles.inputDetails}>{authCtx.user.firstName}</Text>
                <Text style={styles.TitlesDetails}>{"אימייל"}</Text>
                <Text style={[styles.inputDetail,styles.postionEmail]}>{authCtx.user.email}</Text>
                {authCtx.user.userType === "donator" && <>
                    <Text style={styles.TitlesDetails}>מיקום</Text>
                    <Text style={styles.inputDetails}>{authCtx.user.location.city}</Text>
                </>}
            </View>
        <Pressable onPress={authCtx.logout}>
            <Text>התנתק</Text>
        </Pressable>
        </View>
    )


}


export default Profile;


const styles = StyleSheet.create({

    mainContainer: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'flex-start',
        flex: 1,
        margin: -1,
    },
    topRadiusContainer: {
        backgroundColor: '#ffc72e',
        paddingVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,

        elevation: 21
    }
    , radiusContinerHeader: {

        paddingVertical: 100,
        borderBottomRightRadius: 200,
        borderBottomEndRadius: 1000,
        borderBottomStartRadius: 1000,
        height: '1%',
        backgroundColor: '#ffc72e',

    },
    imageContainer:{
        backgroundColor:'white',
        position: 'relative',
        bottom: '12%',
        left:'30%',
        borderRadius:100,
        height:120,
        width:120
    }
    ,
    image: {
        width: 80,
        height: 80,
        alignSelf: "center",
        borderRadius: 460,
        marginTop:30
        


    },
    detailContainer: {
        marginLeft:100,
        marginTop: -20,
    }
    ,postionEmail:{
        position:"relative",
        right:180
    }
    , TitlesDetails: {
        marginBottom: 0,
        marginRight: 20,
        color: 'gray',
        fontSize: 20

    }
    , inputDetails: {
        marginBottom: 20,
        marginRight: 20,
        color: '#d49b00',
        fontSize: 16
    },
    arrowIcon: {
        marginTop: 20,
        marginLeft: 10,
        width: 40,
        height: 30,
        transform: [{ rotateZ: '90deg' }]
    }
});