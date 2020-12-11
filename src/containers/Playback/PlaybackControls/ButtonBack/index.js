import React, { createRef, useEffect } from 'react';
import { TimelineRef, ViewRef, ButtonRef } from '@youi/react-native-youi';

export default function ButtonBack({ navigation }) {
  const inTimelineRef = createRef();

  const handleBackPress = () => {
    navigation.navigate('Gallery');
  };

  useEffect(() => {
    if (inTimelineRef.current) inTimelineRef.current.play();
  });

  return (
    <ViewRef name="Btn-Back-Container">
      <TimelineRef name="In" ref={inTimelineRef} />
      <ButtonRef name="Btn-Back" onPress={handleBackPress} />
    </ViewRef>
  );
}
