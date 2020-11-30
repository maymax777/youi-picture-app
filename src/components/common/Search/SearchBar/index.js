import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './style';

function SearchBar() {
  const handleInputChange = () => {
    console.log('handleInputChange');
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
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </View>
  );
}

export default SearchBar;
