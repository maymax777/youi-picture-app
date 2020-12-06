import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

const Card = ({ item }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={item.image} style={styles.background}>
        <Text style={styles.itemTitle}>{item.title}</Text>
      </ImageBackground>
    </View>
  );
};

export default Card;
