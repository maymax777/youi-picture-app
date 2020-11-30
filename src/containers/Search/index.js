import React from 'react';
import { View, Text } from 'react-native';
import SearchBar from '@components/common/Search/SearchBar';
import SearchButton from '@components/common/Search/SearchButton';

function Search() {
  return (
    <View>
      <SearchBar />
      <SearchButton />
    </View>
  );
}

export default Search;
