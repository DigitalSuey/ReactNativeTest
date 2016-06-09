import React from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';
import SearchBar from '../components/searchBar';
import MovieList from '../components/movieList';
import search from '../actions' ;

class MovieScreen extends React.Component {
  render() {
    return (
      <View>
        <SearchBar
          search={this.props.search}
        />
        <MovieList {...this.props} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { data, isLoading, error } = state.movies;

  return {
    data,
    isLoading,
    error,
  };
}

export default connect(mapStateToProps, { search })(MovieScreen);

MovieScreen.propTypes = {
  search: React.PropTypes.func.isRequired,
};
