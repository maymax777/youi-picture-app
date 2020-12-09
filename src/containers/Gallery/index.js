import React, { useEffect } from 'react';
import { SafeAreaView, FlatList, BackHandler } from 'react-native';
import { useSelector } from 'react-redux';
import Card from '@components/common/Card';
import styles from './style';
import { COLUMN_SIZE } from '@utils/config';

const Result = ({ navigation }) => {
  const { images, loading } = useSelector((state) => state.Unsplash);

  const renderItem = ({ item, index }) => {
    return <Card item={item} key={index} />;
  };

  const onBackPressed = () => {
    navigation.navigate('Search');
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onBackPressed);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackPressed);
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        numColumns={COLUMN_SIZE}
      />
    </SafeAreaView>
  );
};

export default Result;
