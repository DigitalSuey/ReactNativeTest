// IMPORT
import React, { Component, PropTypes } from 'react';
import {
  ActivityIndicatorIOS,
  TextInput,
  View,
} from 'react-native';
import styles from '../styles';

// COMPONENTS
class SearchBar extends Component {
  render() {
    return (
      <View style={styles.searchBar.searchBar}>
        <TextInput
          style={styles.searchBar.searchBarInput}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Search movies on iTunes"
          returnKeyType="search"
          enablesReturnKeyAutomatically
          onEndEditing={this.props.onSearch}
        />
        <ActivityIndicatorIOS animating={this.props.isLoading} />
      </View>
    );
  }
}

SearchBar.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  onSearch: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  isLoading: false,
};

export default SearchBar;
