import React from 'react';
import {
  Image,
  Text,
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import styles from '../styles';

export default class MovieCell extends React.Component {
  render() {
    const { data } = this.props;
    const TouchableElement = (Platform.OS === 'ios') ? TouchableHighlight : TouchableNativeFeedback;

    return (
      <View>
        <TouchableElement
          onPress={this.props.onSelect}
          onShowUnderlay={this.props.onHighlight}
          onHideUnderlay={this.props.onDeHighlight}
        >
          <View style={styles.movieList.container} >
            <Image
              source={{ uri: data.artworkUrl100 }}
              style={styles.movieList.thumbnail}
            />
            <View style={styles.movieList.rightContainer}>
              <Text style={styles.movieList.title}>{data.trackName}</Text>
              <Text style={styles.movieList.year}>{data.artistName}</Text>
            </View>
          </View>
        </TouchableElement>
      </View>
    );
  }
}

MovieCell.propTypes = {
  data: React.PropTypes.object.isRequired,
  onSelect: React.PropTypes.func.isRequired,
  onHighlight: React.PropTypes.func,
  onDeHighlight: React.PropTypes.func,
};
