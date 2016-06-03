// IMPORT
import React from 'react';
import {
  AlertIOS,
  NavigatorIOS,
  StatusBarIOS,
} from 'react-native';
import styles from '../styles';
import MovieList from './movieList';

StatusBarIOS.setStyle('light-content');

// COMPONENT
function App() {
  return (
    <NavigatorIOS
      style={styles.global.mainContainer}
      barTintColor="#2a3744"
      tintColor="#efefef"
      titleTextColor="#efefef"
      initialRoute={{
        component: MovieList,
        title: 'React Native Test',
        rightButtonTitle: 'Search',
        onRightButtonPress: () => AlertIOS.alert(
          'Search Alert', 'This is an alert'
        ),
      }}
    />
  );
}

export default App;
