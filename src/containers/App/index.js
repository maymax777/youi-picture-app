import React from 'react';
import { View } from 'react-native';
import Search from '@containers/Search';
import styles from './style';

function App() {
  return (
    <View style={styles.container}>
      <Search />
    </View>
  );
}

export default App;
