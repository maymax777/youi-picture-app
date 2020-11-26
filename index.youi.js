/**
 * Basic You.i RN app
 */
import React, { Component } from "react";
import App from './src/containers/App';
import { Provider } from 'react-redux';

export default class YiReactApp extends Component {
  render() {
    return (
      <Provider store={store} >
        <App />
      </Provider>      
    )    
  }
}

AppRegistry.registerComponent("YiReactApp", () => YiReactApp);
