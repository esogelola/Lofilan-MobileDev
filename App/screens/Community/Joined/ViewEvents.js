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

import {Card, Surface, Title, Paragraph} from 'react-native-paper';

const Stack = createStackNavigator();

const TextButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.textButtonContainer}>
    <Text style={styles.textButtonText}>{title}</Text>
  </TouchableOpacity>
);

class CreateCommunit1Screen extends React.Component {
  constructor({navigation}) {
    super();
  }

  render() {
    return (
      <>

        <View style={styles.container}>
          <Surface style={styles.surface}>
            <Text> May, 2 - May, 21</Text>
          </Surface>
        <ScrollView>
          <Card style={styles.Card}>
            <Card.Content>
              <Title style={{color: '#F85F6A'}}>Garage Sale</Title>
              <Paragraph style={styles.small}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                at consectetur.....
              </Paragraph>
              <Text style={styles.small}>34 Brook Haven Avenue</Text>
              <Text style={styles.smallOrange}>12 May 2020 12:30PM</Text>
            </Card.Content>

            <Card.Actions>
              <TextButton title="JOIN" />
              <TextButton title="Not Interested" />
            </Card.Actions>
          </Card>
           <Card style={styles.Card}>
            <Card.Content>
              <Title style={{color: '#F85F6A'}}>Backyard Cinema</Title>
              <Paragraph style={styles.small}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                at consectetur.....
              </Paragraph>
              <Text style={styles.small}>34 Brook Haven Avenue</Text>
              <Text style={styles.smallOrange}>12 May 2020 12:30PM</Text>
            </Card.Content>

            <Card.Actions>
              <TextButton title="JOIN" />
              <TextButton title="Not Interested" />
            </Card.Actions>
          </Card>
          </ScrollView>
             <TextButton title="Add Event" />
        </View>
        
      </>
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
  },
  smallOrange: {
    fontFamily: 'Asap',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 9,
    lineHeight: 14,
    color: '#F85F6A',
    marginTop: 0,
  },

  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#F85F6A',
    borderRadius: 6,
    paddingVertical: 5,
    paddingHorizontal: 100,
    marginBottom: 10,
  },
  surface: {
    padding: 8,
    height: '10%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    marginBottom: 20,
    backgroundColor: '#EB5757',
  },
  Card: {
    width: '100%',
    marginBottom:10,
    elevation: 1,
  },
  textButtonContainer: {
    elevation: 8,
    marginBottom: 10,
    marginLeft: 10,
  },
  textButtonText: {
    fontFamily: 'Asap',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 19,

    alignSelf: 'center',
  },
});

export default CreateCommunit1Screen;
