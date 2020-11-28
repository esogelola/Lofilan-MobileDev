/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {TouchableOpacity, TextInput, } from 'react-native'
import Marketplace from './marketplaceUi/Marketplace';
import MarketplaceViewItem from './marketplaceUi/Marketplace';
import MarketPlaceViewItem from './marketplaceUi/MarketPlaceViewItem';
import MarketplaceSell from './marketplaceUi/MarketplaceSell';
import MarketplaceCategories from './marketplaceUi/MarketplaceCategories';
//import Expo from 'expo';
//import {StackNavigator} from 'react-navigation';




const App: () => React$Node = () => {
  return (
      <Marketplace/>
      //<MarketPlaceViewItem/>
      //<MarketplaceSell/>
      //<MarketplaceCategories/>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 23
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
  },

  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
