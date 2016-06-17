import React from 'react';
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
      <View style={styles.loginView.content}>
        <View style={styles.movieDetail.separator} />
        <TextInput
          style={styles.loginView.textField}
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
          style={styles.loginView.textField}
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
          <Text style={styles.loginView.loginButton}>Submit</Text>
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

LoginFormView.propTypes = {
  login: React.PropTypes.func.isRequired,
};

export default LoginFormView;
