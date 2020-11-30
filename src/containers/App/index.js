import React from 'react';
import { View } from 'react-native';
import Logo from '@components/common/Logo';
import Search from '@containers/Search';
import styles from './style';

function App() {
  return (
    <View style={styles.container}>
      <Logo />
      <Search />
    </View>
  );
}

export default App;
