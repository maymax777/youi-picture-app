import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './style';

function SearchBar({ handleKeyword }) {
  const handleInputChange = (text) => {
    handleKeyword(text);
  };
  const handleInputFocus = () => {
    console.log('handleInputFocus');
  };
  const handleInputBlur = () => {
    console.log('handleInputBlur');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search..."
        style={styles.searchInput}
        underlineColorAndroid={true}
        onChangeText={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </View>
  );
}

export default SearchBar;
