// IMPORT
import React, { Component, PropTypes} from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Styles from '../Styles/styles';
import { fetchData } from '../actions/actions';
import { rootReducer } from '../reducers';
import configureStore from '../store';

// COMPONENT
class SearchController extends Component {
  render() {
    const { value, onSearchSubmit } = this.props;

    return (
      <Provider store={store}>
        <View style={Styles.global.content}>
          <TouchableHighlight onPress={onSearchSubmit}>
            <Text>Hello { this.props.value }</Text>
          </TouchableHighlight>
        </View>
      </Provider>
    );
  }
}

SearchController.propTypes = {
  value: PropTypes.number.isRequired,
  onSearchSubmit: PropTypes.func.isRequired
}

// Store
const store = createStore(rootReducer);

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.data
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onSearchSubmit: () => dispatch(fetchData('https://itunes.apple.com/search?media=movie&term=mini'))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchController)

/*
import React from 'react';
import {
  AlertIOS,
  View,
} from 'react-native';
import Styles from '../Styles/styles';
import DescriptionView from '../Views/DescriptionView';
import SearchBarView from '../Views/SearchBarView';
import MovieListView from '../Views/MovieListView';

import { createStore } from 'redux';

const store = createStore(Actions);

const API_URL = 'https://itunes.apple.com/search';
const LOADING = {};
var resultsCache = {
  dataForQuery: {},
};

// COMPONENT
export default class SearchController extends React.Component {
  // this.store.subscribe(fetchData);

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
        <MovieListView />
      </View>
    );
  }
}
*/
