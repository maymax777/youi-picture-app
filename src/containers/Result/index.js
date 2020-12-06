import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  SafeAreaView,
  VirtualizedList,
} from 'react-native';
import { useSelector } from 'react-redux';
import styles from './style';

const Result = () => {
  const images = useSelector((state) => state.images);

  const renderItem = (item) => {
    <View style={styles.item}>
      <ImageBackground source={item.image} style={styles.itemBackground}>
        <Text style={styles.itemTitle}>{item.title}</Text>
      </ImageBackground>
    </View>;
  };
  const getItem = (item) => item;
  const getItemCount = () => (images || []).length;
  const keyExtractor = (item) => item.key;

  return (
    <SafeAreaView>
      <VirtualizedList
        data={images}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </SafeAreaView>
  );
};

export default Result;
