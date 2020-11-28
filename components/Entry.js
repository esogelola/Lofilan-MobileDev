/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';
//Navigation
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Import Screens below
import JoinCommunityScreen from './Community/JoinCommunity';
import ListCommunityScreen from './Community/ListCommunity';


const Drawer = createDrawerNavigator();
const Entry = () => {
  return (
    <>
    <Text>Lofilan</Text>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Community" component={JoinCommunityScreen} />
        <Drawer.Screen name="Marketplace" component={ListCommunityScreen} />
        {/* <Drawer.Screen name="Messages" component={NotificationsScreen} />
        <Drawer.Screen name="Settings" component={NotificationsScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
    </>
  );
};

export default Entry;
