import React from 'react';
import {
  ActionSheetIOS,
  AlertIOS,
  NavigatorIOS,
  StatusBar,
} from 'react-native';
import styles from '../styles';
import MovieScreen from './movieScreen';
import CameraView from '../components/cameraView';
import CameraRollView from '../components/cameraRollView';
import SignupWebView from '../components/signupWebView';

const BUTTONS = [
  'Camera',
  'Camera roll',
  'Alert',
  'Signup webview',
  'Delete',
  'Cancel',
];
const DESTRUCTIVE_INDEX = 4;
const CANCEL_INDEX = 5;

StatusBar.setBarStyle('light-content');

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
          this.renderCameraRollView();
          break;

        case 2:
          AlertIOS.alert('Alert', 'This is an alert');
          break;

        case 3:
          this.renderWebview();
          break;

        default:
          break;
      }
    });
  }

  renderCameraView() {
    this.refs.nav.push({
      title: 'Take photo',
      component: CameraView,
    });
  }

  renderCameraRollView() {
    this.refs.nav.push({
      title: 'Camera Roll',
      component: CameraRollView,
    });
  }

  renderWebview() {
    this.refs.nav.push({
      component: SignupWebView,
    });
  }

  render() {
    return (
      <NavigatorIOS
        ref="nav"
        style={styles.global.mainContainer}
        barTintColor="#2a3744"
        tintColor="#efefef"
        titleTextColor="#efefef"
        initialRoute={{
          component: MovieScreen,
          title: 'Main',
          rightButtonTitle: 'Button',
          onRightButtonPress: () => this.showActionSheet(),
        }}
      />
    );
  }
}

export default App;
