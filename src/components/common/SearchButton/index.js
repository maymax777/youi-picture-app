import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './style';

const SearchButton = ({ handleOnPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handleOnPress}>
      <Text> Search </Text>
    </TouchableOpacity>
  );
};

export default SearchButton;
