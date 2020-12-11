import React from 'react';
import { View, Text } from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Search from '@containers/Search';
import Gallery from '@containers/Gallery';
import Playback from '@containers/Playback';

const rootStack = createSwitchNavigator(
  {
    Search: { screen: Search, navigationOptions: {} },
    Gallery: { screen: Gallery, navigationOptions: {} },
    Playback: { screen: Playback, navigationOptions: {} },
  },
  {
    // initialRouteName: 'Playback',
  },
);

const AppNavigator = createAppContainer(rootStack);

export default AppNavigator;
