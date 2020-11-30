import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
  Linking,
} from 'react-native';

import {
  Surface,
  Text,
  Searchbar,
  Paragraph,
  Title,
  Card,
} from 'react-native-paper';
const AppButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);
const TextButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.textButtonContainer}>
    <Text style={styles.textButtonText}>{title}</Text>
  </TouchableOpacity>
);

class ListCommunityScreen extends React.Component {
  constructor({navigation}) {
    super();
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../../../static/images/44.jpg')}
          />
          <Surface style={styles.surface}>
            <Title>Julia Robert</Title>
            <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text
                  style={{
                    width: '100%',
                  }}>
                  Email
                </Text>
              </View>
              <View
                style={[{justifyContent: 'space-evenly', marginVertical: 10}]}>
                <Text style={{}}>juliar@gmail.com</Text>
              </View>
            </View>
            <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text
                  style={{
                    width: '100%',
                  }}>
                  Mobile
                </Text>
              </View>
              <View
                style={[{justifyContent: 'space-evenly', marginVertical: 10}]}>
                <Text style={{}}>(416) 453 3921</Text>
              </View>
            </View>
            <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text
                  style={{
                    width: '100%',
                  }}>
                  Role
                </Text>
              </View>
              <View
                style={[{justifyContent: 'space-evenly', marginVertical: 10}]}>
                <Text
                  style={{
                    justifyContent: 'space-evenly',
                  }}>
                  Admin
                </Text>
              </View>
            </View>
            <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text
                  style={{
                    width: '100%',
                    justifyContent: 'space-evenly',
                    marginVertical: 10,
                  }}>
                  Status
                </Text>
              </View>
              <View style={[{justifyContent: 'space-evenly'}]}>
                <Text>Active</Text>
              </View>
            </View>
          </Surface>
        </View>
        <AppButton title="Message"/>
        <AppButton title="Posts"/>
        <AppButton title="Events"/>

        <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
          <View style={{flex: 1, flexDirection: 'row',  marginLeft: 30,
    marginRight: 30,}}>
            <TextButton
              icon="information"
              style={{
                justifyContent: 'space-evenly',
                marginVertical: 10,
                
              }}
              title="Promote"
            />
          </View>
          <View style={[{justifyContent: 'space-evenly', marginVertical: 10,  marginLeft: 30,
    marginRight: 30,}]}>
            <TextButton
              icon="information"
              style={{
                justifyContent: 'space-evenly',
                marginVertical: 10,
              }}
              title="Delete"
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    margin: 25,
  },
  image: {
    width: 160,
    height: 182,
    resizeMode: 'contain',
    marginBottom: 25,
    borderRadius: 90,
    alignSelf: 'center',
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
    fontSize: 12,
    lineHeight: 18,
    color: '#989EB1',
    marginTop: 0,
  },
  smallBlue: {
    fontFamily: 'Asap',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 18,
    color: '#3E7EFF',
    marginTop: 0,
  },
  smallOrange: {
    fontFamily: 'Asap',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 14,
    color: '#F85F6A',
    marginTop: 10,
  },

  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#FFFF',
    borderRadius: 6,
    paddingVertical: 10,
 
    
    marginBottom: 5,
    marginLeft: 30,
    marginRight: 30,
  },
  appButtonText: {
    fontFamily: 'Asap',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 19,
    color: 'black',

    textTransform: 'uppercase',
    marginLeft: 20,
  },
  Card: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'transparent',
    elevation: 0,
  },
  surface: {
    padding: 8,

    width: '100%',

    elevation: 4,
    marginBottom: 20,
  },
});

export default ListCommunityScreen;
