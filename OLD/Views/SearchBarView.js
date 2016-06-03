// IMPORT
import React from 'react';
import {
  ActivityIndicatorIOS,
  TextInput,
  View,
} from 'react-native';
import Styles from '../Styles/styles';
import Actions, { fetchMovies } from '../Actions/index';

import { createStore } from 'redux';

const store = createStore(Actions);

// COMPONENTS
export default class SearchBarView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: false,
    };
  }

  emitEndEditingEvent() {
    // TODO: Emit an event
    store.dispatch();
  }

  render() {
    return (
      <View style={Styles.SearchBarView.searchBar}>
        <TextInput
          style={Styles.SearchBarView.searchBarInput}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Search movies on iTunes"
          returnKeyType="search"
          enablesReturnKeyAutomatically
          onEndEditing={this.emitEndEditingEvent}
        />
        <ActivityIndicatorIOS animating={this.state.isFetching} />
      </View>
    );
  }
}
