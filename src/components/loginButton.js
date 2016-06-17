// IMPORT
import React from 'react';

import {
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import styles from '../styles';
import loginView from './loginFormView';

// COMPONENTS
class LoginButton extends React.Component {
  renderLoginView() {
    this.props.navigator.push({
      component: loginView,
    });
  }

  render() {
    return (
      <View style={styles.loginView.content}>
        <TouchableHighlight
          onPress={() => this.renderLoginView()}
        >
          <Text style={styles.loginView.loginButton}>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

LoginButton.propTypes = {
  navigator: React.PropTypes.object.isRequired,
};

export default LoginButton;
