import React from 'react';
import {
  View,
  WebView,
} from 'react-native';
import styles from '../styles';
// import HTML from './html/login.html';

// class LoginForm {
//   render() {
//     return (
//       `
//       <form onSubmit="submitPressed()">
//         <input type="email" name="emailTextField" placeholder="Email" />
//         <input type="password" name="passwordTextField" placeholder="Password" />
//         <input type="submit" name="Submit" />
//       </form>
//       `
//     );
//   }
// }

class LoginWebViewExample extends React.Component {
  submitPressed() {
    console.log('hello');
  }

  render() {
    const HTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta http-equiv="content-type" content="text/html; charset=utf-8">
          <meta name="viewport" content="width=320, user-scalable=no">
          <style type="text/css">
            body {
              margin: 0;
              padding: 0;
              font: arial, sans-serif;
            }
            input {
              margin-top: 10px;
              width: 100%;
            }
          </style>
        </head>
        <body>
          <form onSubmit="${this.submitPressed()}">
            <input type="email" name="emailTextField" placeholder="Email">
            <input type="password" name="passwordTextField" placeholder="Password">
            <input type="submit" name="Submit">
          </form>
        </body>
      </html>
    `;

    return (
      <View style={styles.webView.container}>
        <WebView
          automaticallyAdjustContentInsets={false}
          style={styles.webView.webView}
          bounces={false}
          source={{ html: HTML }}
          scalesPageToFit
          decelerationRate="normal"
        />
      </View>
    );
  }
}

// source={{ html: HTML }}
// source={HTML}

export default LoginWebViewExample;
