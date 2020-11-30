import React, { useState } from 'react';
import { View } from 'react-native';
import SearchBar from '@components/common/Search/SearchBar';
import SearchButton from '@components/common/Search/SearchButton';
import styles from './style';

function Search() {
  const [keyword, setKeyword] = useState('');
  const handleSearchButton = () => {
    console.log('keyword: ', keyword);
  };

  return (
    <View style={styles.container}>
      <SearchBar handleKeyword={setKeyword} />
      <SearchButton handleOnPress={handleSearchButton} />
    </View>
  );
}

export default Search;
