import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './style';

const Card = ({ item, navigation }) => {
  const handleCardPress = () => {
    navigation.navigate('Playback');
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleCardPress}>
      <ImageBackground source={{ uri: item.image }} style={styles.background}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Card;
