// IMPORT
import React from 'react';

import {
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import styles from '../styles';
import loginView from './loginWebView';

// COMPONENTS
class WebLoginButton extends React.Component {
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
          <Text style={styles.loginView.loginButton}>Login Web</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

WebLoginButton.propTypes = {
  navigator: React.PropTypes.object.isRequired,
};

export default WebLoginButton;
