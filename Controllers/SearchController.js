// IMPORT
import React from 'react';
import {
  AlertIOS,
  View,
} from 'react-native';
import Styles from '../Styles/styles';
import DescriptionView from '../Views/DescriptionView';
import SearchBarView from '../Views/SearchBarView';
import MovieListView from '../Views/MovieListView';

// CONSTANTS
const API_URL = 'https://itunes.apple.com/search';
const LOADING = {};
var resultsCache = {
  dataForQuery: {},
};

// COMPONENTS
class SearchController extends React.Component {
  urlForQuery(query) {
    if (query.length > 2) {
      return `${API_URL}?media=movie&term=${encodeURIComponent(query)}`;
    }

    return null;
  }

  fetchData(query) {
    const cachedResultsForQuery = resultsCache.dataForQuery[query];

    function resolve(responseData) {
      LOADING[query] = false;
      resultsCache.dataForQuery[query] = responseData.results;

      AlertIOS.alert('Search result count:', `${cachedResultsForQuery.length} results`);

      this.setState({
        isLoading: false,
        resultsData: resultsCache.dataForQuery[query],
      });
    }

    function reject() {
      LOADING[query] = false;
      resultsCache.dataForQuery[query] = undefined;

      this.setState({
        isLoading: false,
      });
    }

    if (cachedResultsForQuery) {
      if (!LOADING[query]) {
        AlertIOS.alert('Search result count:', `${cachedResultsForQuery.length} cached results`);

        this.setState({
          isLoading: false,
          resultsData: cachedResultsForQuery,
        });
      } else {
        this.setState({
          isLoading: true,
        });
      }
    } else {
      const queryURL = this.urlForQuery(query);

      if (queryURL === undefined) {
        return;
      }

      this.setState({
        isLoading: true,
      });

      LOADING[query] = true;
      resultsCache.dataForQuery[query] = null;

      fetch(queryURL)
        .then(response => response.json())
        .then(resolve)
        .catch(reject);
    }
  }

  handleSearchEvent(event) {
    this.fetchData(event.nativeEvent.text);
  }

  render() {
    return (
      <View style={Styles.global.content}>
        <SearchBarView onSearch={SearchController.handleSearchEvent} />
        <DescriptionView />
      </View>
    );
  }
}

export default SearchController;
