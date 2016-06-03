import React, { PropTypes } from 'react';
import {
  Image,
  ListView,
  Text,
  View,
} from 'react-native';
import Styles from '../Styles/styles';

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
      <View style={Styles.container}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  }

  renderMovie(data) {
    return (
      <View style={Styles.MovieListView.container}>
        <Image
          source={{ uri: data.posters.thumbnail }}
          style={Styles.MovieListView.thumbnail}
        />
        <View style={Styles.MovieListView.rightContainer}>
          <Text style={Styles.MovieListView.title}>{data.title}</Text>
          <Text style={Styles.MovieListView.year}>{data.year}</Text>
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
        style={Styles.MovieListView.listView}
      />
    );
  }
}

// MovieListView.propTypes = {
//   isLoading: PropTypes.bool.isRequired,
//   hasLoaded: PropTypes.bool.isRequired,
//   dataSource: PropTypes.arrayOf({
//     posters: PropTypes.arrayOf({
//       thumbnail: PropTypes.string.isRequired,
//     }).isRequired
//     title: PropTypes.string.isRequired,
//     year: PropTypes.string.isRequired
//   }).isRequired,
//   searchButtonDidTouchUpInside: PropTypes.function.isRequired,
// };
//
// MovieListView.defaultProps = {
//   isLoading: false,
//   hasLoaded: false,
// };
