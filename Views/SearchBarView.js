// IMPORT
import React from 'react';
import {
  ActivityIndicatorIOS,
  TextInput,
  View,
} from 'react-native';
import Styles from '../Styles/styles';

// COMPONENTS
class SearchBarView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }

  emitEndEditingEvent() {
    // TODO: Emit an event
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
        <ActivityIndicatorIOS animating={this.state.isLoading} />
      </View>
    );
  }
}

export default SearchBarView;
