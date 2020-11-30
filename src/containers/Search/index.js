import React from 'react';
import { View, Text } from 'react-native';
import SearchBar from '@components/common/Search/SearchBar';
import SearchButton from '@components/common/Search/SearchButton';
import styles from './style';

function Search() {
  const handleSearchButton = () => {};

  return (
    <View style={styles.container}>
      <SearchBar />
      <SearchButton handleOnPress={handleSearchButton} />
    </View>
  );
}

export default Search;
