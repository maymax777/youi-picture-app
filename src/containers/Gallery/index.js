import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import Card from '@components/common/Card';
import styles from './style';

const Result = () => {
  const { images, loading } = useSelector((state) => state.Unsplash);

  const renderItem = (item) => {
    return <Card item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal={true}>
        {images && images.map((image) => renderItem(image))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Result;
