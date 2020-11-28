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
  DataTable,
} from 'react-native-paper';
const TextButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.textButtonContainer}>
    <Text style={styles.textButtonText}>{title}</Text>
  </TouchableOpacity>
);
const AppButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);
class ListCommunityScreen extends React.Component {
  constructor({navigation}) {
    super();
    this.state = {
      users: [
        {
          name: 'Introductions',
          email: 'sam.smith@gmail.com',
          isEmailHidden: false,
          isMobileHidden: false,
          last: '4 Hours ago',
          distance: '0.2 KM',
          image: '../../static/images/' + 'KtCFjlD4.png',
        },
        {
          name: 'Julia Robert',
          email: 'juliar@gmail.com',
          isEmailHidden: true,
          isMobileHidden: true,
          last: 'Active',
          distance: '0.2 KM',
          image: '../../static/images/' + '44.jpg',
        },
        {
          name: 'Adam Driver',
          email: 'sam.smith@gmail.com',
          isEmailHidden: false,
          isMobileHidden: true,
          last: '12 July',
          distance: '0.2 KM',
          image: '../../static/images/gPZwCbdS.jpg',
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
      <Title>Users  <AppButton title="Invite"/></Title>
     
        <Searchbar placeholder="Search" />
      
        <ScrollView Horizontal>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>User</DataTable.Title>
              <DataTable.Title>Email</DataTable.Title>
              <DataTable.Title>Last Login</DataTable.Title>
              <DataTable.Title>Distance</DataTable.Title>
            </DataTable.Header>

            {this.state.users.map((user, num) => {
              return (
                <TouchableOpacity>
                  <DataTable.Row key={num}>
                    <DataTable.Cell>{user.name}</DataTable.Cell>
                    <DataTable.Cell>{user.email}</DataTable.Cell>
                    <DataTable.Cell>{user.last}</DataTable.Cell>
                    <DataTable.Cell>{user.distance}</DataTable.Cell>
                  </DataTable.Row>
                </TouchableOpacity>
              );
            })}
          </DataTable>
        </ScrollView>
      </View>
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
    backgroundColor: '#F85F6A',
    borderRadius: 6,
    paddingVertical: 5,
    paddingHorizontal: 10,
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
  Card: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'transparent',
    elevation: 0,
  },
  surface: {
    padding: 8,
    height: '30%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    marginBottom: 20,
  },
});

export default ListCommunityScreen;
