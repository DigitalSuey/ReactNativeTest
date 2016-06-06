import React from 'react';
import {
  Image,
  ListView,
  Text,
  View,
} from 'react-native';
import styles from '../styles';

export default class MovieListView extends React.Component {
  constructor(props) {
    super(props);

    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
  }

  componentDidMount() {
    this.props.search();
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  }

  renderMovie(data) {
    return (
      <View style={styles.movieList.container}>
        <Image
          source={{ uri: data.artworkUrl60 }}
          style={styles.movieList.thumbnail}
        />
        <View style={styles.movieList.rightContainer}>
          <Text style={styles.movieList.title}>{data.trackName}</Text>
          <Text style={styles.movieList.year}>{data.artistName}</Text>
        </View>
      </View>
    );
  }

  render() {
    const { data } = this.props;
    this.dataSource = this.dataSource.cloneWithRows(data || []);

    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderMovie}
        style={styles.movieList.listView}
      />
    );
  }
}

MovieListView.propTypes = {
  data: React.PropTypes.array.isRequired,
  isLoading: React.PropTypes.bool.isRequired,
  error: React.PropTypes.bool.isRequired,
  search: React.PropTypes.func.isRequired,
};
