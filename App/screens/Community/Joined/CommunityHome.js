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
const TextButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.textButtonContainer}>
    <Text style={styles.textButtonText}>{title}</Text>
  </TouchableOpacity>
);

class CommunityHome extends React.Component {
  constructor({navigation}) {
    super();
    this.state = {
      postings: [
        {
          title: 'Introductions',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at consectetur.....',
          created: '12 July',
          author: 'Julia R',
          topic: 'New members',
        },
        {
          title: 'Introductions',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at consectetur.....',
          created: '12 July',
          author: 'Julia R',
          topic: 'New members',
        },
        {
          title: 'Introductions',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at consectetur.....',
          created: '12 July',
          author: 'Julia R',
          topic: 'New members',
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Surface style={styles.surface}>
          <Text>Community Event / Latest News</Text>
        </Surface>

        <ScrollView>
          {this.state.postings.map((post, num) => {
            return (
              <TouchableOpacity key={num}>
                <Card style={styles.Card}>
                  <Card.Content>
                    <Text style={styles.smallOrange}>{post.title}</Text>
                    <Paragraph style={styles.small}>
                      {post.description}
                    </Paragraph>
                    <Text style={styles.small}>
                      {post.created} by {post.author} in{' '}
                      <Text style={styles.smallOrange}>{post.topic}</Text>
                    </Text>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <TextButton title="New Post" size="sm" backgroundColor="#007bff" />
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

export default CommunityHome;
