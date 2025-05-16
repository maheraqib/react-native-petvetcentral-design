import { Alert, Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FormScreen from './FormScreen';
import About from './About';
import { launchImageLibrary } from 'react-native-image-picker';




const ProfileScreen = () => {
    const [imageUri, setImageUri] = useState('https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?ga=GA1.1.457035726.1746794275&semt=ais_hybrid&w=740');

    const selectImageFromGallery = () => {
        launchImageLibrary(
            { mediaType: 'photo', quality: 1 },
            (response) => {
                if (response.didCancel) {
                    Alert.alert('Cancelled', 'You cancelled gallery selection');
                } else if (response.errorMessage) {
                    Alert.alert('Gallery Error', response.errorMessage);
                } else if (response.assets && response.assets.length > 0) {
                    setImageUri(response.assets[0].uri);
                }
            }
        );
    };
    


  return (
    <ScrollView >
        <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View>
        <Image source={{uri:imageUri}} style={styles.profileImage}/>
        <TouchableOpacity onPress={() => selectImageFromGallery()}>
        <FontAwesome name="camera" color="#bd33d4" size={24}  style={styles.icon}/>
        </TouchableOpacity>
        
        </View>
        <View style={styles.profileDetailsContainer}>
            <Text style={styles.userName}> Jhon Michel </Text>
            <View style={styles.emailContainer}>
            <Fontisto name="email" color="#bd33d4" size={20} />
            <Text style={styles.text}> test@gmail.com </Text>
            </View>

            <View style={styles.locationContainer}>
            <Entypo name="location" color="#bd33d4" size={20} />
            <Text style={styles.text}> Saint louis, Mo </Text>
            </View>

            <View style={styles.jobTypeContainer}>
            <Entypo name="briefcase" color="#bd33d4" size={20} />
            <Text style={styles.text}> MS Vetrinarian </Text>
            </View>
        </View>
      </View>
      <FormScreen/>
      <About/>
      </View>
    </ScrollView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        margin: 20,
        marginTop: 20
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center'
    },
    profileImage: {
        width:150,
        height: 150,
        borderRadius: 20,
        marginRight: 20,
    },
    icon: {
        position: 'absolute',
        right: 11,
        bottom: 135
        // textAlign: 'center'
    },
    profileDetailsContainer: {
        justifyContent: 'space-between'
    },

    userName: {
        fontSize: 20,
        fontWeight: 500,
        marginBottom: 10,
    },
    emailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        textAlign: 'center'

    },
    locationContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        textAlign: 'center'

    },
    jobTypeContainer: {
         flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        textAlign: 'center'
    },
    text: {
        fontFamily: 'sans-serif	',
        marginLeft: 5
    },
})