import React from 'react';
import {
  AlertIOS,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import styles from '../styles';

class LoginFormView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  setEmail(string) {
    this.state.email = string;
  }

  setPassword(string) {
    this.state.password = string;
  }

  focusNextField(string) {
    this.state.email = string;
    this.refs.passwordTextField.focus();
  }

  login() {
    if (this.state.email === '' ||
        this.state.password === '') {
      AlertIOS.alert('', 'Please fill in both fields');
      return;
    }

    fetch('https://uat.huggies.com.au/api/v1/sessions.json', {
      method: 'post',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        remember_me: false,
      }),
    })
      .then(response => console.log(response))
      .then(response => console.log(response.json()))
      .catch(response => console.log('ERROR', response));
  }

  render() {
    return (
      <View style={styles.loginView.content}>
        <View style={styles.movieDetail.separator} />
        <TextInput
          style={styles.loginView.textField}
          autoCapitalize="none"
          autoFocus
          keyboardType="email-address"
          autoCorrect={false}
          placeholder="email"
          returnKeyType="next"
          enablesReturnKeyAutomatically
          onChange={(e) => this.setEmail(e.nativeEvent.text)}
          onSubmitEditing={(e) => this.focusNextField(e.nativeEvent.text)}
        />
        <TextInput
          style={styles.loginView.textField}
          ref="passwordTextField"
          autoCapitalize="none"
          secureTextEntry
          autoCorrect={false}
          placeholder="password"
          returnKeyType="done"
          enablesReturnKeyAutomatically
          onChange={(e) => this.setPassword(e.nativeEvent.text)}
          onSubmitEditing={this.login()}
        />
        <TouchableHighlight
          onPress={() => this.login()}
        >
          <Text style={styles.loginView.loginButton}>Submit</Text>
        </TouchableHighlight>
        <View style={styles.movieDetail.separator} />
      </View>
    );
  }
}

export default LoginFormView;
