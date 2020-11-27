import React from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from '../../components/common/Logo';
import SearchBar from '../../components/common/SearchBar';
import styles from './style';

function App() {
  return (
    <View style={styles.container}>
      <Logo />
      <SearchBar />
    </View>
  );
}

export default App;
