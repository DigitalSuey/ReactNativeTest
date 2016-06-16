import React, {
  Component,
  PropTypes,
} from 'react';
import {
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import styles from '../styles';

class LoginFormView extends React.Component {
  render() {
    return (
      <View style={styles.movieDetail.mainSection}>
        <View style={styles.movieDetail.separator} />
        <TextInput
          style={styles.searchBar.searchBarInput}
          ref="emailTextField"
          autoCapitalize="none"
          autoFocus
          keyboardType="email-address"
          autoCorrect={false}
          placeholder="email"
          returnKeyType="next"
          enablesReturnKeyAutomatically
        />
        <TextInput
          style={styles.searchBar.searchBarInput}
          ref="passwordTextField"
          autoCapitalize="none"
          secureTextEntry
          autoCorrect={false}
          autoCapitalize={false}
          placeholder="password"
          returnKeyType="done"
          enablesReturnKeyAutomatically
        />
        <TouchableHighlight>
          <Text style={styles.movieDetail.iTunesButton}>Submit</Text>
        </TouchableHighlight>
        <View style={styles.movieDetail.separator} />
      </View>
    );
  }
}

/*
  <TextInput
  style={styles.searchBar.searchBarInput}
  ref="passwordTextField"
  autoCapitalize="none"
  secureTextEntry={true}
  autoCorrect={false}
  autoCapitalize={false}
  placeholder="password"
  returnKeyType="done"
  enablesReturnKeyAutomatically
  onEndEditing={(e) => this.props.login(e.nativeEvent.text)}
/>
*/

// <TouchableHighlight
//   onPress={() => Linking.openURL(data.trackViewUrl)}
// >

LoginFormView.PropTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginFormView;
