import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import styles from '../styles';
import Camera from 'react-native-camera';

class CameraView extends React.Component {
  render() {
    return (
      <View style={styles.camera.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.camera.preview}
          aspect={Camera.constants.Aspect.fill}
        >
          <Text style={styles.camera.capture} onPress={this.takePicture}>[CAPTURE]</Text>
        </Camera>
      </View>
    );
  }
}

export default CameraView;
