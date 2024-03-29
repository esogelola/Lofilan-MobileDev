import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
  Linking,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import ListCommunityScreen from './ListCommunity';
import {TextInput} from 'react-native-paper';

const Stack = createStackNavigator();

const AppButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const CreateCommunit1Screen = ({navigation}) => {
  return (
    <>
      <Stack.Screen name="ListCommunity" component={ListCommunityScreen} />

      <View style={styles.container}>
        <Image
          source={require('../../../assets/images/people_PNG.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Create a Community</Text>

        <Text style={styles.small}>
          Finding a Community near you must be tough, doesn’t hurt to start one
          for your Neighbourhood
        </Text>
        <Text style={styles.smallOrange}>
          Responsibilities of a Community leader.
        </Text>
        <TextInput label="Community Name" />
        <AppButton
          onPress={() => navigation.push('create community 2')}
          title="Next"
          size="sm"
          backgroundColor="#007bff"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 25,
  },
  image: {
    width: 160,
    height: 182,
    resizeMode: 'contain',

    marginBottom: 25,
  },
  title: {
    fontFamily: 'Quicksand',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 32,
    /* identical to box height */

    color: '#000000',
  },
  small: {
    fontFamily: 'Asap',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 18,
    color: '#989EB1',
    marginTop: 0,
    padding: 5,
  },
  smallOrange: {
    fontFamily: 'Asap',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 9,
    lineHeight: 14,
    color: '#F85F6A',
    marginTop: 0,
    padding: 5,
    textDecorationLine: 'underline',
  },

  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#F85F6A',
    borderRadius: 6,
    paddingVertical: 5,
    paddingHorizontal: 100,
    marginBottom: 10,
  },
  appButtonText: {
    fontFamily: 'Asap',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 19,
    color: '#FFFFFF',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default CreateCommunit1Screen;
