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
  Checkbox,
} from 'react-native-paper';

const AppButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>
      {title} <CheckBoxC />
    </Text>
  </TouchableOpacity>
);
const CheckBoxC = ({title}) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <Checkbox.Item
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
      label={title}
    />
  );
};
class ListCommunityScreen extends React.Component {
  constructor({navigation}) {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <Title>Preferences</Title>
       <CheckBoxC title="Display Email"/>
        <CheckBoxC title="Display Mobile"/>
         <CheckBoxC title="Recieve Notifications"/>
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
    backgroundColor: '#FFFF',
    borderRadius: 6,
    paddingVertical: 10,

    marginBottom: 10,
    marginTop: 10,
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
    height: '30%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    marginBottom: 20,
  },
});

export default ListCommunityScreen;
