import React from 'react';
import {
  ActionSheetIOS,
  AlertIOS,
  NavigatorIOS,
  StatusBarIOS,
  Text,
  View,
} from 'react-native';
import styles from '../styles';
import MovieScreen from './movieScreen';
import CameraView from '../components/cameraView';

// const CameraRollView = require('./CameraRollView');

const BUTTONS = [
  'Camera',
  'Camera roll',
  'Alert',
  'Delete',
  'Cancel',
];
const DESTRUCTIVE_INDEX = 3;
const CANCEL_INDEX = 4;

StatusBarIOS.setStyle('light-content');

// COMPONENT
class App extends React.Component {
  showActionSheet() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: CANCEL_INDEX,
      destructiveButtonIndex: DESTRUCTIVE_INDEX,
    },
    (index) => {
      console.log('tapped on button >>>', BUTTONS[index], index);

      switch (index) {
        case 0:
          this.renderCameraView();
          break;

        case 1:
          this.renderCameraView();
          break;

        case 2:
          AlertIOS.alert('Alert', 'This is an alert');
          break;

        default:
          break;

      }
    });
  }

  renderCameraView() {

  }

  renderCameraRollView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  }

  render() {
    return (
      <NavigatorIOS
        style={styles.global.mainContainer}
        barTintColor="#2a3744"
        tintColor="#efefef"
        titleTextColor="#efefef"
        initialRoute={{
          component: MovieScreen,
          title: 'React Native Test',
          rightButtonTitle: 'Button',
          onRightButtonPress: () => this.showActionSheet(),
        }}
      />
    );
  }
}

export default App;
