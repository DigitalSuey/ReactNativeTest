import Root from './src/containers/root';
import { AppRegistry } from 'react-native';

AppRegistry.registerComponent('TestReactNative', () => Root);

/*
'use strict';

var React = require('react-native');
var App = require('./src/containers/App');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var reduxCounter = React.createClass({
  render: function() {
    return (
      <App />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('reduxCounter', () => reduxCounter);
*/

/*
// IMPORT
import React from 'react';
import {
  AppRegistry,
  AlertIOS,
  NavigatorIOS,
  StatusBarIOS,
} from 'react-native';
import styles from './Styles/styles';
import SearchController from './Controllers/SearchController';

StatusBarIOS.setStyle('light-content');

// COMPONENT
function TestReactNative() {
  return (
    <NavigatorIOS
      style={styles.global.mainContainer}
      barTintColor="#2a3744"
      tintColor="#efefef"
      titleTextColor="#efefef"
      initialRoute={{
        component: SearchController,
        title: 'React Native Test',
        rightButtonTitle: 'Search',
        onRightButtonPress: () => AlertIOS.alert(
          'Search Alert', 'This is an alert'
        ),
      }}
    />
  );
}

AppRegistry.registerComponent('TestReactNative', () => TestReactNative);
*/
