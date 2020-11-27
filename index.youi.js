/**
 * Basic You.i RN app
 */
import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import App from './src/containers/App';
import { Provider } from 'react-redux';
import store from './src/redux/store';

export default class YiReactApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('YiReactApp', () => YiReactApp);
