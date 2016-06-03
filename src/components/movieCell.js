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
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      hasLoaded: false,
    };
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
          source={{ uri: data.posters.thumbnail }}
          style={styles.movieList.thumbnail}
        />
        <View style={styles.movieList.rightContainer}>
          <Text style={styles.movieList.title}>{data.title}</Text>
          <Text style={styles.movieList.year}>{data.year}</Text>
        </View>
      </View>
    );
  }

  render() {
    if (this.state.hasLoaded === false) {
      return null;
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        style={styles.movieList.listView}
      />
    );
  }
}
