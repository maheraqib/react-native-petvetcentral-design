import { StyleSheet, View } from 'react-native'
import React from 'react'
import HomeScreen from './components/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabBar from './components/TabBar';
import ProfileScreen from './components/ProfileScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name='TabBar' component={TabBar}/>
        <Stack.Screen name='Profile' component={ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default App

const styles = StyleSheet.create({
  container: {
  }
})