import React from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';
import styles from '../styles';

function MovieDetail() {
  const { data } = this.props;

  return (
    <View style={styles.movieList.container}>
      <Image
        source={{ uri: data.artworkUrl100 }}
        style={styles.movieList.thumbnail}
      />
      <View style={styles.movieList.rightContainer}>
        <Text style={styles.movieList.title}>{data.trackName}</Text>
        <Text style={styles.movieList.year}>{data.artistName}</Text>
      </View>
    </View>
  );
}

MovieDetail.propTypes = {
  data: React.PropTypes.array.isRequired,
};

export default MovieDetail;
