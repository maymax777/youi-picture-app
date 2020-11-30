import React from 'react';
import { View } from 'react-native';
import Logo from '@components/common/Logo';
import SearchBar from '@components/common/Search/SearchBar';
import SearchButton from '@components/common/Search/SearchButton';
import styles from './style';

function App() {
  return (
    <View style={styles.container}>
      <Logo />
      <SearchBar />
      <SearchButton />
    </View>
  );
}

export default App;
