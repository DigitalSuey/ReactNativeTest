// IMPORT
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store';
import App from '../containers/app';

const store = configureStore();

// COMPONENT
function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Root;
