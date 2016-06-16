import React from 'react';
import {
  View,
  WebView,
} from 'react-native';
import styles from '../styles';

const SIGNUP_URL = 'https://ned.huggies.com.au/join';

export default class WebViewExample extends React.Component {
  render() {
    return (
      <View style={styles.webView.container}>
        <WebView
          automaticallyAdjustContentInsets={false}
          style={styles.webView.webView}
          source={{
            url: SIGNUP_URL,
          }}
          decelerationRate="normal"
        />
      </View>
    );
  }
}
