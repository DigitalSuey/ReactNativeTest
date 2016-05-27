// IMPORT
import React from 'react';
import {
  AppRegistry,
  AlertIOS,
  NavigatorIOS,
  StatusBarIOS,
} from 'react-native';

import styles from './Styles/styles';
import MediaTableView from './Views/MediaTableView';

// COMPONENTS
StatusBarIOS.setStyle('light-content');

// VIEWS
function TestReactNative() {
  return (
    <NavigatorIOS
      style={styles.global.mainContainer}
      barTintColor="#2a3744"
      tintColor="#efefef"
      titleTextColor="#efefef"
      initialRoute={{
        component: MediaTableView,
        title: 'React Native Test',
        rightButtonTitle: 'Search',
        onRightButtonPress: () => AlertIOS.alert(
          'Search Alert', 'You wanted an alert? Here\'s an alert'
        ),
      }}
    />
  );
}

AppRegistry.registerComponent('TestReactNative', () => TestReactNative);
