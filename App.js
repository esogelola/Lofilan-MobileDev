/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import StartScreen from './screens/StartScreen';

const Stack = createStackNavigator();
const App = () => {
  return(
    <NavigationContainer>
      <StartScreen/>
      
    </NavigationContainer>

  );


}


export default App;
