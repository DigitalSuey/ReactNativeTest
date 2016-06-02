import React from 'react';
import {
  Image,
  ListView,
  Text,
  View,
} from 'react-native';
import Styles from '../Styles/styles';

class MovieListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      hasLoaded: false,
    };
  }

  // componentDidMount() {
  //   this.fetchData();
  // }
  //
  // fetchData() {
  //   fetch(REQUEST_URL)
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       this.setState({
  //         dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
  //         loaded: true,
  //       });
  //     })
  //     .done();
  // }
  //
  // renderLoadingView() {
  //   return (
  //     <View style={styles.container}>
  //       <Text>
  //         Loading movies...
  //       </Text>
  //     </View>
  //   );
  // }

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

export default MovieListView;
