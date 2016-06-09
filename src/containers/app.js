import React from 'react';
import {
  ActionSheetIOS,
  AlertIOS,
  NavigatorIOS,
  StatusBarIOS,
} from 'react-native';
import styles from '../styles';
import MovieScreen from './movieScreen';
import CameraView from '../components/cameraView';
import CameraRollView from '../components/cameraRollView';

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

class App extends React.Component {
  showActionSheet() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: CANCEL_INDEX,
      destructiveButtonIndex: DESTRUCTIVE_INDEX,
    },
    (index) => {
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
    return (
      <CameraView />
    );
  }

  renderCameraRollView() {
    const lala = <CameraRollView />;
    console.log(lala);
  }

  render() {
    return (
      <NavigatorIOS
        style={styles.global.mainContainer}
        barTintColor="#2a3744"
        tintColor="#efefef"
        titleTextColor="#efefef"
        initialRoute={{
          component: CameraRollView,
          title: 'React Native Test',
          rightButtonTitle: 'Button',
          onRightButtonPress: () => this.showActionSheet(),
        }}
      />
    );
  }
}

export default App;
