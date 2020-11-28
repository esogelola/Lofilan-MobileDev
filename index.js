/**
 * @format
 */


import * as React from 'react';


import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import App from './App';
import {Provider as PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';

export default function Main() {
  return (
    
      <App />

  );
}

AppRegistry.registerComponent(appName, () => Main);
