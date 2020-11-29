/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
import Entry from './components/Entry';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return <Entry />;
};

export default App;
