import React from 'react';
import { View, Text } from 'react-native';

const Suspense = ({ loading, children }) => {
  return <View>{children}</View>;
};

export default Suspense;
