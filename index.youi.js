/**
 * Basic You.i RN app
 */
import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '@redux/store';
import Navigator from '@navigation';

export default class YiReactApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('YiReactApp', () => YiReactApp);
