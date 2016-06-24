import React from 'react';
import {
  View,
  WebView,
} from 'react-native';
import styles from '../styles';

const SIGNUP_URL = 'https://ned.huggies.com.au/join';

function WebViewExample() {
  return (
    <View style={styles.webView.container}>
      <WebView
        automaticallyAdjustContentInsets={false}
        style={styles.webView.webView}
        bounces={false}
        source={{
          url: SIGNUP_URL,
        }}
        decelerationRate="normal"
      />
    </View>
  );
}

export default WebViewExample;
