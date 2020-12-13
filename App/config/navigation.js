import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SignIn from '../screens/Entry/SignInScreen';
import SignUp from '../screens/Entry/SignUpScreen';

import CommunityHome from '../screens/Community/CommunityHome';
import CommunityCommunity1 from '../screens/Community/CreateCommunity1';
import CommunityCommunity2 from '../screens/Community/CreateCommunity2';
import CommunityCommunity3 from '../screens/Community/CreateCommunity3';

import CommunityHomeJoined from '../screens/Community/Joined/CommunityHome';
import CommunitySearch from '../screens/Community/Joined/CommunitySearch';
import CommunityEvents from '../screens/Community/Joined/ViewEvents';
import CommunitySettings from '../screens/Community/Joined/CommunitySettings';

import MarketplaceHome from '../screens/Marketplace/Marketplace';

import {AuthContext} from '../context';
import {Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const hasCommunity = false;
const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
  </AuthStack.Navigator>
);

const createCommunityStack = createStackNavigator();
const createCommunityStackScreen = ({userToken}) => (
  <createCommunityStack.Navigator>
    <createCommunityStack.Screen
      name="community Home"
      component={CommunityHome}
    />
    <createCommunityStack.Screen
      name="create community 1"
      component={CommunityCommunity1}
    />
    <createCommunityStack.Screen
      name="create community 2"
      component={CommunityCommunity2}
    />
    <createCommunityStack.Screen
      name="create community 3"
      component={CommunityCommunity3}
    />
  </createCommunityStack.Navigator>
);
const communityHomeStack = createStackNavigator();
const communityHomeScreen = ({userToken}) => (
  <communityHomeStack.Navigator headerMode="none">
    {
      /* does user have a community*/ hasCommunity ? (
        <communityHomeStack.Screen
          name="communityHome"
          component={CommunityHomeJoined}
        />
      ) : (
        <communityHomeStack.Screen
          name="communityHomeScreen"
          component={createCommunityStackScreen}
        />
      )
    }
  </communityHomeStack.Navigator>
);
const RootTab = createBottomTabNavigator();
const rootTabScreen = ({userToken}) => (
  <RootTab.Navigator>
    {hasCommunity ? (
      <>
        <RootTab.Screen name="home" component={communityHomeScreen} />
        <RootTab.Screen name="search" component={CommunitySearch} />
        <RootTab.Screen name="events" component={CommunityEvents} />
        <RootTab.Screen name="settings" component={CommunitySettings} />
      </>
    ) : (
      <RootTab.Screen
        tabBarVisible="false"
        name="home"
        component={communityHomeScreen}
      />
    )}
  </RootTab.Navigator>
);
const RootDrawer = createDrawerNavigator();
const rootDrawerScreen = ({userToken}) => (
  <RootDrawer.Navigator>
    <RootDrawer.Screen name="Community" component={rootTabScreen} />
    <RootDrawer.Screen name="Marketplace" component={MarketplaceHome} />
  </RootDrawer.Navigator>
);
const RootStack = createStackNavigator();
const RootStackScreen = ({userToken}) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={rootDrawerScreen}
        options={{
          animationEnabled: false,
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false,
        }}
      />
    )}
  </RootStack.Navigator>
);

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('userToken');
      if (value !== null) {
        setUserToken(value);
        console.log(value);
      }
    } catch (e) {
      console.log({e, error: 'occurred when getting data'});
    }
  };

  const authContext = React.useMemo(() => {
    return {
      signIn: async () => {
        setIsLoading(false);
        try {
          await AsyncStorage.setItem('userToken', 'asdf').then(
            getData().then(console.log('data has been loaded')),
          );
        } catch (error) {
          console.log(error);
        }

        console.log('User signed in!');
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken('asdf');
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  React.useEffect(() => {
    getData();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
