import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import {TouchableOpacity, TextInput} from 'react-native';
import {Component} from 'react';

class MarketplaceCategories extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Marketplace Home</Text>
        <Text>Sell</Text>
        <Text>Categories</Text>
        <Text>Search</Text>
        <Text>Your Items</Text>
        <Text>Home</Text>
        <Text>Tools</Text>
        <Text>Furniture</Text>
        <Text>Garden</Text>
        <Text>Computer</Text>
        <Text>Radio</Text>
        <Text>Office, Workplace</Text>
        <Text>Entertainment</Text>
        <Text>Music</Text>
        <Text>Toys</Text>
        <Text>Movies</Text>
      </View>
    );
  }
}
export default MarketplaceCategories;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
});
