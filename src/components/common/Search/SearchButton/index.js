import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './style';

const SearchButton = ({ handleOnPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handleOnPress}>
      <Text style={styles.buttonText}> Search </Text>
    </TouchableOpacity>
  );
};

export default SearchButton;
