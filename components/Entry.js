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
import ViewPosting from './Community/ViewPosting';

import EditPosting from './Community/EditPosting';
import ViewEvents from './Community/ViewEvents';
import CreateEvent from './Community/CreateEvent';
import CommunityInformation from './Community/CommunityInformation';
import CommunityUsers from './Community/CommunityUsers';
import CommunityInvite from './Community/CommunityInvite';

import CommunityUserEvents from './Community/CommunityUserEvents';
import CommunityUserPosts from './Community/CommunityUserPosts';
import ViewUser from './Community/ViewUser';
import CommunityPreferences from './Community/CommunityPreferences';
import CommunitySettings from './Community/CommunitySettings';
const Drawer = createDrawerNavigator();
const Entry = () => {
  return (
    <>
      <Text>Lofilan</Text>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen
            name="Community (!Logged)"
            component={JoinCommunityScreen}
          />
          <Drawer.Screen
            name="Clicked Browse"
            component={ListCommunityScreen}
          />
          <Drawer.Screen
            name="Create Community 1"
            component={CreateCommunity1Screen}
          />
          <Drawer.Screen
            name="Create Community 2"
            component={CreateCommunity2Screen}
          />
          <Drawer.Screen
            name="Create Community 3"
            component={CreateCommunity3Screen}
          />
          <Drawer.Screen
            name="Community Home"
            component={CommunityHomeScreen}
          />
          <Drawer.Screen
            name="Community Search"
            component={CommunitySearchScreen}
          />
          <Drawer.Screen name="Create Posting" component={CreatePosting} />
          <Drawer.Screen name="View Posting" component={ViewPosting} />
          <Drawer.Screen name="Edit Posting" component={EditPosting} />
          <Drawer.Screen name="View Events" component={ViewEvents} />
          <Drawer.Screen name="Create Event" component={CreateEvent} />
          <Drawer.Screen name="Community Information" component={CommunityInformation} />
                    <Drawer.Screen name="Community Users" component={CommunityUsers} />
 <Drawer.Screen name="Community Invite" component={CommunityInvite} />
  <Drawer.Screen name="Community User Events" component={CommunityUserEvents} />
   <Drawer.Screen name="Community User Posts" component={CommunityUserPosts} />
    <Drawer.Screen name="Community User" component={ViewUser} />
        <Drawer.Screen name="Community Preferences" component={CommunityPreferences} />
                <Drawer.Screen name="Community Settings" component={CommunitySettings } />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Entry;
