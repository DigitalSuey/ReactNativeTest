import React from 'react';
import {
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import styles from '../styles';

export default class MovieDetail extends React.Component {
  buyPrice(data) {
    if ((data.trackHdPrice && data.trackPrice) === false) {
      return null;
    }

    return (
      <View>
        <View style={styles.movieDetail.separator} />
        <View style={styles.movieDetail.priceRow}>
          <Text>Buy</Text>
          <Text style={styles.movieDetail.price}>${data.trackHdPrice} (HD)</Text>
          <Text style={styles.movieDetail.price}>${data.trackPrice} (SD)</Text>
        </View>
      </View>
    );
  }

  rentPrice(data) {
    if ((data.trackHdRentalPrice && data.trackRentalPrice) === false) {
      return null;
    }

    return (
      <View>
        <View style={styles.movieDetail.separator} />
        <View style={styles.movieDetail.priceRow}>
          <Text>Rent</Text>
          <Text style={styles.movieDetail.price}>${data.trackHdRentalPrice} (HD)</Text>
          <Text style={styles.movieDetail.price}>${data.trackRentalPrice} (SD)</Text>
        </View>
      </View>
    );
  }

  render() {
    const { data } = this.props;

    return (
      <ScrollView contentContainerStyle={styles.movieDetail.contentContainer}>
        <View style={styles.movieDetail.mainSection}>
          <Image
            source={{ uri: data.artworkUrl100 }}
            style={styles.movieDetail.detailsImage}
          />
          <View style={styles.movieDetail.rightPane}>
            <Text style={styles.movieDetail.movieTitle}>{data.artistName}</Text>
            <View style={styles.movieDetail.mpaaWrapper}>
              <Text>
                {data.contentAdvisoryRating}
              </Text>
            </View>
            {this.buyPrice(data)}
            {this.rentPrice(data)}
          </View>
        </View>
        <View style={styles.movieDetail.separator} />
        <Text>Description:</Text>
        <Text>{data.longDescription}</Text>
        <View style={styles.movieDetail.separator} />
        <TouchableHighlight
          onPress={() => Linking.openURL(data.trackViewUrl)}
        >
          <Text style={styles.movieDetail.iTunesButton}>View in iTunes</Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}

MovieDetail.propTypes = {
  data: React.PropTypes.object.isRequired,
};
