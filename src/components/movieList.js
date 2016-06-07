import React from 'react';
import {
  Image,
  ListView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import styles from '../styles';
import MovieDetail from '../components/movieDetail';

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

  onHighlight() {

  }

  onDeHighlight() {

  }

  selectRow(data) {
    console.log('navigator', this.props.navigator);
    this.props.navigator.push({
      title: data.trackName,
      component: MovieDetail,
      passProps: { data },
    });
  }

  renderMovie(data) {
    return (
      <TouchableHighlight
        onShowUnderlay={this.onHighlight}
        onHideUnderlay={this.onDeHighlight}
        onSelect={() => this.selectRow(data)}
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
      </TouchableHighlight>
    );
  }

  renderSeparator(sectionId, rowId, adjacentRowIsHighlited) {
    return (
      <View
        key={`SEP_${sectionId}_${rowId}`}
        style={[
          styles.movieList.rowSeparator,
          styles.movieList.adjecentRowHighlighted && styles.movieList.rowSeparatorHighlighted,
        ]}
      />
    );
  }

  render() {
    const { data } = this.props;
    this.dataSource = this.dataSource.cloneWithRows(data || []);

    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderMovie}
        renderSeparator={this.renderSeparator}
        keyboardDismissMode="on-drag"
        automaticallyAdjustContentInsets={false}
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
