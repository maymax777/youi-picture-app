import React from 'react';
import { View } from 'react-native';
import Navigator from '../../navigation';
import styles from './style';

function App() {
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  );
}

export default App;
