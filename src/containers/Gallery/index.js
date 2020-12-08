import React, { useState, useEffect } from 'react';
import { SafeAreaView, VirtualizedList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@components/common/Card';
import styles from './style';

const Result = () => {
  const { images, loading } = useSelector((state) => state.Unsplash);

  console.log('here', { images, loading });

  const renderItem = (item) => {
    return <Card item={item} />;
  };
  const getItem = (item) => item;
  const getItemCount = () => (images || []).length;
  const keyExtractor = (item) => item.key;

  return (
    <SafeAreaView style={styles.container}>
      {/* {(images||[]).map(image => renderItem(image))} */}
      {/* <VirtualizedList
        data={images}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        getItemCount={getItemCount}
        getItem={getItem}
        style={styles.list}
      /> */}
    </SafeAreaView>
  );
};

export default Result;
