import React from 'react';
//
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Header Navigation


const Drawer = createDrawerNavigator();
const Entry = () => {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Start Screen">
          <Drawer.Screen
            name="Community (!Logged)"
            component={JoinCommunityScreen}
          />

        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Entry;
