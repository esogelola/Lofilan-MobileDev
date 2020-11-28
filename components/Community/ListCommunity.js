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

import {Surface, Text, Searchbar, DataTable} from 'react-native-paper';
const TextButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.textButtonContainer}>
    <Text style={styles.textButtonText}>{title}</Text>
  </TouchableOpacity>
);

class ListCommunityScreen extends React.Component {
  constructor({navigation}) {
    super();
    this.state = {
      communities: [
        {
          membersCount: 64,
          name: 'Brookhaven Home Group',
          active: true,
        },
        {
          membersCount: 99,
          name: 'BillMay Crescent Friends',
          active: true,
        },
        {
          membersCount: 64,
          name: 'Buddies in Parrel',
          active: true,
        },
        {
          membersCount: 64,
          name: 'StBernards Street Group',
          active: true,
        },
        {
          membersCount: 64,
          name: 'Sedgewick Circle ',
          active: true,
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Surface style={styles.surface}>
          <Text>Feature Community / Event</Text>
        </Surface>
        <Text style={styles.smallOrange}>
          Location: <Text style={styles.smallBlue}>32 Brookhaven Avenue</Text>
        </Text>
        <Text style={styles.small}>
          Communities within 4 kilometers will appear.
        </Text>
        <Searchbar placeholder="Search" />
        <ScrollView>
          <DataTable >
            <DataTable.Header>
              <DataTable.Title># Members</DataTable.Title>
              <DataTable.Title>Name</DataTable.Title>
              <DataTable.Title>Active</DataTable.Title>
            </DataTable.Header>

            {this.state.communities.map((com, num) => {
              return (
                <DataTable.Row  key={num}>
                  <DataTable.Cell >{com.membersCount}/100</DataTable.Cell>
                  <DataTable.Cell>{com.name}</DataTable.Cell>
                  <DataTable.Cell>
                    {com.active ? 'Active' : 'Inactive'}
                  </DataTable.Cell>
                </DataTable.Row>
              );
            })}
          </DataTable>
        </ScrollView>
        <Text style={styles.smallOrange}>Community Guideline</Text>
         <TextButton
            title="Create a Community"
            size="sm"
            backgroundColor="#007bff"
          />
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

  surface: {
    padding: 8,
    height: '30%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
});

export default ListCommunityScreen;
