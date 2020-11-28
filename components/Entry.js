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
import CreateCommunity1Screen from './Community/CreateCommunity1';
import CreateCommunity2Screen from './Community/CreateCommunity2';
import CreateCommunity3Screen from './Community/CreateCommunity3';
import CommunityHomeScreen from './Community/CommunityHome';
import CommunitySearchScreen from './Community/CommunitySearch';
import CreatePosting from './Community/CreatePosting';

const Drawer = createDrawerNavigator();
const Entry = () => {
  return (
    <>
    <Text>Lofilan</Text>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Community (!Logged)" component={JoinCommunityScreen} />
        <Drawer.Screen name="Clicked Browse" component={ListCommunityScreen} />
        <Drawer.Screen name="Create Community 1" component={CreateCommunity1Screen} /> 
        <Drawer.Screen name="Create Community 2" component={CreateCommunity2Screen} /> 
                <Drawer.Screen name="Create Community 3" component={CreateCommunity3Screen} /> 
<Drawer.Screen name="Community Home" component={CommunityHomeScreen} /> 
<Drawer.Screen name="Community Search" component={CommunitySearchScreen} /> 
<Drawer.Screen name="Create Posting" component={CreatePosting} /> 
      </Drawer.Navigator>
    </NavigationContainer>
    </>
  );
};

export default Entry;
