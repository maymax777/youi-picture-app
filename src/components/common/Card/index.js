import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './style';

const Card = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground source={{ uri: item.image }} style={styles.background}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Card;
