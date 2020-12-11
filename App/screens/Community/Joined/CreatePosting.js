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
import {TextInput, RadioButton, Chip, IconButton} from 'react-native-paper';

const Stack = createStackNavigator();

const AppButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

class CreatePosting extends React.Component {
  constructor({navigation}) {
    super();
  }

  render() {
    return (
      <ScrollView>
        <Stack.Screen name="ListCommunity" component={ListCommunityScreen} />

        <View style={styles.container}>
          <Text style={styles.title}>Create a Post</Text>

          <TextInput label="Title" />
          <TextInput
            style={{marginTop: 10}}
            multiline={true}
            numberOfLines={3}
            label="Description"
          />

          <Text icon="information" style={styles.small}>
            17 Sedgewick Circle
          </Text>
          <Text style={styles.small2}>Topic</Text>

          <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Chip
                icon="information"
                selected="true"
                style={{
                  width: '100%',
                  justifyContent: 'space-evenly',
                  marginVertical: 10,
                }}>
                Garage Sales
              </Chip>
            </View>
            <View
              style={[{justifyContent: 'space-evenly', marginVertical: 10}]}>
              <Chip
                icon="information"
                style={{
                  justifyContent: 'space-evenly',
                  marginVertical: 10,
                }}>
                New Members
              </Chip>
            </View>
          </View>
          <Text style={{"marginBottom" : 10}}>
            {' '}
            <IconButton
              icon="camera"
              size={20}
              onPress={() => console.log('Pressed')}
            />
            Attach an Image or file
          </Text>
          <AppButton title="Post" size="sm" backgroundColor="#007bff" />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 25,
  },

  image: {
    width: '100%',
    height: 182,
    resizeMode: 'contain',

    marginBottom: 0,
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
  medium: {
    fontFamily: 'Quicksand',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 24,
    lineHeight: 28,
    /* identical to box height */
    color: '#989EB1',
    marginTop: 40,
  },
  medium2: {
    fontFamily: 'Quicksand',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 24,
    lineHeight: 28,
    /* identical to box height */
    color: '#989EB1',
    marginBottom: 30,
  },
  medium3: {
    fontFamily: 'Quicksand',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 24,
    lineHeight: 28,
    /* identical to box height */
    color: '#989EB1',
  },
  small: {
    fontFamily: 'Asap',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 18,
    color: '#989EB1',
  },
  smallRadio: {
    fontFamily: 'Asap',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 18,
    color: '#989EB1',
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

export default CreatePosting;
