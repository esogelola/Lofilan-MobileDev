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

class Marketplace extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Marketplace Home</Text>
        <Text>Sell</Text>
        <Text>Categories</Text>
        <Text>Search</Text>
        <Text>Your Items</Text>
        <TextInput style={styles.input} placeholder="What are you selling?" />
        <Text>Some Items here</Text>
        <Text>Some Items here</Text>
        <Text>Some Items here</Text>
      </View>
    );
  }
}
export default Marketplace;

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
