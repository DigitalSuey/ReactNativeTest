// IMPORT
import React, {
  Component,
  PropTypes,
} from 'react';

import {
  Text,
  TouchableHighlight,
} from 'react-native';

import styles from '../styles';
import loginView from './loginFormView';

// COMPONENTS
class LoginButton extends Component {
  renderLoginView() {
    this.navigation.push({
      component: loginView,
    });
  }

  render() {
    return (
      <TouchableHighlight
        onPress={() => this.renderLoginView()}
      >
        <Text style={styles.loginView.loginButton}>Login</Text>
      </TouchableHighlight>
    );
  }
}

LoginButton.PropTypes = {
  navigation: PropTypes.func.isRequired,
};

export default LoginButton;
