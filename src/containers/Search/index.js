import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import SearchBar from '@components/common/Search/SearchBar';
import SearchButton from '@components/common/Search/SearchButton';
import unsplashActions from '@redux/unsplash/actions';
import styles from './style';

function Search() {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState('');
  const handleSearchButton = () => {
    dispatch({ type: unsplashActions.SEARCH_IMAGE, payload: keyword });
  };

  return (
    <View style={styles.container}>
      <SearchBar handleKeyword={setKeyword} />
      <SearchButton handleOnPress={handleSearchButton} />
    </View>
  );
}

export default Search;
