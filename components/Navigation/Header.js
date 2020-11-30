/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Header extends Component {
  constructor() {
    super(props);

  }
  onHamurgerClick() {
    this.props.toggleDrawer();
  }
  render() {
    return (
      <View>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', backgroundColor: 'white' }}>Lofilan</Text>
      </View>
    );
  }
}

