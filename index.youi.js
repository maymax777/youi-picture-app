/**
 * Basic You.i RN app
 */
import React, { Component } from "react";
import App from './src/containers/App';
export default class YiReactApp extends Component {
  render() {
    return <App />
  }
}

AppRegistry.registerComponent("YiReactApp", () => YiReactApp);
