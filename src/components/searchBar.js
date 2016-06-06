// IMPORT
import React, {
  Component,
  PropTypes,
} from 'react';

import {
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
          ref="search"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Search movies on iTunes"
          returnKeyType="search"
          enablesReturnKeyAutomatically
          onEndEditing={(e) => this.props.search(e.nativeEvent.text)}
        />
      </View>
    );
  }
}

SearchBar.PropTypes = {
  search: PropTypes.func.isRequired,
};

export default SearchBar;
