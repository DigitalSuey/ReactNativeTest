import React from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles';

class CameraRollView extends React.Component {
  renderImage(asset) {
    const imageStyle = [styles.mediaList.image, { width: 75, height: 75 }];
    return (
      <TouchableOpacity key={asset}>
        <View style={styles.cameraRoll.row}>
          <Image
            source={asset.node.image}
            style={imageStyle}
          />
          <View style={styles.cameraRoll.info}>
            <Text style={styles.cameraRoll.url}>{asset.node.image.uri}</Text>
            <Text>{asset.node.group_name}</Text>
            <Text>{new Date(asset.node.timestamp).toString()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View>
        <CameraRollView
          batchSize={10}
          groupTypes="SavedPhotos"
          renderImage={this.renderImage}
        />
      </View>
    );
  }
}

export default CameraRollView;
