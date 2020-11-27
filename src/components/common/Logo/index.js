import React from 'react';
import { Image } from 'react-native';
import styles from './style';

function Logo() {
  return (
    <Image
      style={styles.image}
      source={{ uri: 'res://drawable/default/youi_logo_red.png' }}
    />
  );
}

export default Logo;
