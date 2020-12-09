import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import Card from '@components/common/Card';
import Suspense from '@components/common/Suspense';
import styles from './style';
import { COLUMN_SIZE } from '@utils/config';

const Result = () => {
  const { images, loading } = useSelector((state) => state.Unsplash);

  const renderItem = ({ item, index }) => {
    return <Card item={item} key={index} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Suspense loading={loading}>
        <FlatList
          data={images}
          renderItem={renderItem}
          numColumns={COLUMN_SIZE}
        />
      </Suspense>
    </SafeAreaView>
  );
};

export default Result;
