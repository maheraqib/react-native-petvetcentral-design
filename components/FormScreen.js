import {StyleSheet, Text, View, TextInput, Alert, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import * as ImagePicker from 'react-native-image-picker'


const FormScreen = () => {
  

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: 500}}> Profile info </Text>
      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
          <SimpleLineIcons name="user" color="#bd33d4" size={24} />
          </TouchableOpacity>
        </View>
        <TextInput style={styles.textInput} placeholder="First Name*" />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
        <SimpleLineIcons name="user" color="#bd33d4" size={24} />
        </View>
        <TextInput style={styles.textInput} placeholder="Last Name*" />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <Fontisto name="email" color="#bd33d4" size={24} />
        </View>
        <TextInput style={styles.textInput} placeholder="Email*" />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
        <Feather name="smartphone" color="#bd33d4" size={24} />
        </View>
        <TextInput style={styles.textInput} placeholder="Phone*" />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <Entypo name="location" color="#bd33d4" size={25} />
        </View>
        <TextInput style={styles.textInput} placeholder="Current Location*" />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <Entypo name="briefcase" color="#bd33d4" size={24} />
        </View>
        <TextInput style={styles.textInput} placeholder="Position*" />
      </View>

      <View style={styles.aboutContainer}>

      </View>

    </View>
  );
};

export default FormScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#bd33d4',
    borderWidth: 1,
    marginVertical: 10,
  },
  iconContainer: {
    marginHorizontal: 20,
  },
  textInput: {
    flex: 1,
  },
});
