import React from 'react';
import {
  ListView,
  View,
} from 'react-native';
import styles from '../styles';
import MovieCell from '../components/movieCell';
import MovieDetail from '../components/movieDetail';

export default class MovieListView extends React.Component {
  constructor(props) {
    super(props);

    this.renderCell = this.renderCell.bind(this);

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
    this.props.navigator.push({
      title: data.trackName,
      component: MovieDetail,
      passProps: { data },
    });
  }

  renderCell(data) {
    return (
      <MovieCell
        data={data}
        onSelect={() => this.selectRow(data)}
        onHighlight={this.onHighlight}
        onDeHighlight={this.onDeHighlight}
      />
    );
  }

  renderSeparator(sectionId, rowId, adjacentRowHighlighted) {
    var style = styles.movieList.rowSeparator;
    if (adjacentRowHighlighted) {
      style = [style, styles.movieList.rowSeparatorHighlighted];
    }

    return (
      <View
        key={`SEP_${sectionId}_${rowId}`}
        style={style}
      />
    );
  }

  render() {
    const { data } = this.props;
    this.dataSource = this.dataSource.cloneWithRows(data || []);

    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderCell}
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
  navigator: React.PropTypes.object.isRequired,
};
