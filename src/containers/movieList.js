import React from 'react';
import {
  View,
} from 'react-native';
import SearchBar from '../components/searchBar';
import MovieCell from '../components/movieCell';

// COMPONENT
class MovieList extends React.Component {
  render() {
    return (
      <View>
        <SearchBar />
        <MovieCell />
      </View>
    );
  }
}

/*
<SearchBarView onSearch={SearchController.handleSearchEvent} />
<DescriptionView />
<MovieListView />
*/

export default MovieList;
