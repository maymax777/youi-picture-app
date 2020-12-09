import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

const Suspense = ({ loading, children }) => {
  const renderLoadingText = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Loading ... </Text>
      </View>
    );
  };
  return loading ? renderLoadingText() : children;
};

export default Suspense;
