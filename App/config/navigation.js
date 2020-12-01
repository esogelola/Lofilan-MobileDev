import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SignIn from '../screens/Entry/SignInScreen';
import SignUp from '../screens/Entry/SignUpScreen';

import CommunityHome from '../screens/Community/CommunityHome';
import CommunityEvents from '../screens/Community/Joined/ViewEvents';

import MarketplaceHome from '../screens/Marketplace/Marketplace';

const EntryStack = createStackNavigator();
const EntryStackScreen = () => (
  <EntryStack.Navigator headerMode="none">
    <EntryStack.Screen name="SignIn" component={SignIn} />
    <EntryStack.Screen name="SignUp" component={SignUp} />
  </EntryStack.Navigator>
);

const AppTabs = createBottomTabNavigator();
const AppTabsScreen = () => (
  <AppTabs.Navigator>
    <AppTabs.Screen
      name="Home"
      component={CommunityHome}
      options={{
        tabBarIcon: (props) => (
          <FontAwesome name="home" size={props.size} color={props.color} />
        ),
      }}
    />
    <AppTabs.Screen
      name="Search"
      component={MarketplaceHome}
      options={{
        tabBarIcon: (props) => (
          <FontAwesome name="market" size={props.size} color={props.color} />
        ),
      }}
    />
  </AppTabs.Navigator>
);
export default () => (
  <NavigationContainer>
    <AppTabsScreen />
  </NavigationContainer>
);
