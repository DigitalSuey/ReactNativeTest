// IMPORT
import React from 'react';
import {
  AlertIOS,
  Text,
  TextInput,
  View,
} from 'react-native';
import TimerMixin from 'react-timer-mixin';
import styles from '../Styles/styles';

// CONSTANTS
const API_URL = 'https://itunes.apple.com/search';
const LOADING = {};

var resultsCache = {
  dataForQuery: {},
};

// COMPONENTS
class SearchBar extends React.Component {
  render() {
    return (
      <View style={styles.tableView.searchBar}>
        <TextInput
          style={styles.tableView.searchBarInput}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Search things on iTunes"
          returnKeyType="search"
          enablesReturnKeyAutomatically={true}
          onEndEditing={this.props.onSearch}
        />
      </View>
    );
  }
}

function MediaTableView() {
  const mixins  = [TimerMixin];
  let timeoutId = null;

  function urlForQuery(query) {
    if (query.length > 2) {
      return `${API_URL}?media=movie&term=${encodeURIComponent(query)}`;
    }

    return null;
  }

  function fetchData(query) {
    const cachedResultsForQuery = resultsCache.dataForQuery[query];

    timeoutId = null;

    if (cachedResultsForQuery) {
      if (!LOADING[query]) {
        AlertIOS.alert('Search result count:', `${cachedResultsForQuery.length} cached results`);
        // return cachedResultsForQuery
      }
    } else {
      const queryURL = urlForQuery(query);

      if (queryURL === undefined) {
        return;
      }

      LOADING[query] = true;
      resultsCache.dataForQuery[query] = null;

      fetch(queryURL)
        .then(response => response.json())
        .then(resolve)
        .catch(reject);

      function resolve(responseData) {
        LOADING[query] = false;
        resultsCache.dataForQuery[query] = responseData.results;
        AlertIOS.alert('Search result count', `${responseData.resultCount} results.`);
      }

      function reject(error) {
        LOADING[query] = false;
        resultsCache.dataForQuery[query] = undefined;
        console.log(error);
      }
    }
  }

  return (
    <View style={styles.global.content}>
      <SearchBar
        onSearch={(event) => {
          const searchValue = event.nativeEvent.text;
          this.clearTimeout(timeoutId);
          timeoutId = this.setTimeout(() => fetchData(searchValue), 1000);
        }}
      />
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Text>
    </View>
  );
}

export default MediaTableView;
