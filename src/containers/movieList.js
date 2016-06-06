import React from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';

import SearchBar from '../components/searchBar';
import MovieCell from '../components/movieCell';
import search from '../actions' ;


// COMPONENT
class MovieList extends React.Component {
  render() {
    return (
      <View>
        <SearchBar search={this.props.search} />
        <MovieCell {...this.props} />
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

export default connect(mapStateToProps, { search })(MovieList);
