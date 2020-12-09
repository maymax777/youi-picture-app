import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import SearchBar from '@components/common/Search/SearchBar';
import SearchButton from '@components/common/Search/SearchButton';
import Logo from '@components/common/Logo';
import unsplashActions from '@redux/unsplash/actions';
import styles from './style';

function Search({ navigation }) {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState('');
  const handleSearchButton = () => {
    dispatch({ type: unsplashActions.SET_KEYWORD, payload: { keyword } });
    navigation.navigate('Gallery');
  };

  return (
    <View style={styles.container}>
      <Logo />
      <SearchBar handleKeyword={setKeyword} />
      <SearchButton handleOnPress={handleSearchButton} />
    </View>
  );
}

export default Search;
