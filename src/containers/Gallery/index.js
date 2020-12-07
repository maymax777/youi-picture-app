import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  SafeAreaView,
  VirtualizedList,
} from 'react-native';
import { useSelector } from 'react-redux';
import Card from '@components/common/Card';
import styles from './style';

const Result = () => {
  const images = useSelector((state) => state.images);

  const renderItem = (item) => {
    return <Card item={item} />;
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
