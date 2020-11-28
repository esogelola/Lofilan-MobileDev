/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Header extends Component {
    onHamurgerClick(){
        this.props.toggleDrawer();
    }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

