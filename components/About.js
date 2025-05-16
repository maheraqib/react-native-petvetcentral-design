import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';


const About = () => {
    const [activeTab, setActiveTab] = useState('Next');
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={{fontSize: 20, fontWeight: 500}}>About Me</Text>
        <TouchableOpacity>
          <Text style={styles.button}> Upload Video </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.aboutInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Tell us who you are"
          multiline
          numberOfLines={5}
        />
      </View>
      <Text style={styles.minWords}>Minimum 500 Words</Text>

      <View style={{marginTop: 10}}>
            <View style={styles.headingContainer}>
            <Text style={{fontSize: 20, fontWeight: 500}}>Fun Fact About Me</Text>
            </View>
            <View style={styles.aboutInput}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Type here"
                    multiline
                    numberOfLines={5}
                />
            </View>
        </View>
        {/* <View style={styles.buttonsContainer}>
            <TouchableOpacity style = {styles.backButton}>
                <AntDesign name="arrowleft" color="#f87171" size={24} />
                <Text style={styles.backbuttonText}> Back </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.nextButton}>
                <Text style={styles.nextButtonText}> Next </Text>
                <AntDesign name="arrowright" color="#fff" size={24} />
            </TouchableOpacity>
        </View> */}
        <View style={styles.tabBar}>
                  {['Back', 'Next'].map(tab => (
                    <TouchableOpacity
                      key={tab}
                      onPress={() => setActiveTab(tab)}
                      style={[
                        styles.tabButton,
                        activeTab === tab && styles.activeTabButton,
                      ]}>
                      <Text
                        style={[
                          styles.tabButtonText,
                          activeTab === tab && styles.activeTabText,
                        ]}>
                        {tab}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
     
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#a855f7',
    padding: 8,
    borderRadius: 25,
    color: 'white',
    fontSize: 15,
  },
  aboutInput: {
    marginTop: 5,
    elevation: 2,
    // borderColor: '#a855f7'
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#bd33d4',
    borderRadius: 10,
    padding: 12,
    minHeight: 100,
    textAlignVertical: 'top',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    elevation: 1,
    borderTopWidth: 0,
  },
  minWords: {
    fontSize: 12,
    color: '#f87171',
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 20,
  
  },
  activeTabButton: {
    backgroundColor: '#a678f2',
    borderColor: '#f87171',
    borderWidth: 2
  },
  tabButtonText: {
    color: '#444',
    fontWeight: '600',
  },
  activeTabText: {
    color: '#fff',
  },
  tabBar: {
  flexDirection: 'row',
    // backgroundColor: '#f3eafe',
    borderRadius: 25,
    padding: 4,
    marginVertical: 10,
    justifyContent: 'space-between',
}
//   buttonsContainer: {
//     marginTop: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center'
//   },
//   backButton: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     borderRadius: 40,
//     borderWidth: 2,
//     borderColor: '#f87171',
//     paddingLeft: 40,
//     paddingRight: 40,
//     paddingTop: 7,
//     paddingBottom: 7,
//     alignItems: 'center'
//   },
//   nextButton: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     borderRadius: 40,
//     borderWidth: 2,
//     borderColor: '#a855f7',
//     paddingLeft: 40,
//     paddingRight: 40,
//     paddingTop: 7,
//     paddingBottom: 7,
//     alignItems: 'center',
//     backgroundColor: '#a855f7'
//   },
//   backbuttonText: {
//     color: '#f87171',
//     fontSize: 18
//   },
//   nextButtonText: {
//     color: '#FFFFFF',
//     fontSize: 18
//   },
});
