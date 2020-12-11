import React, { createRef, useEffect } from 'react';
import { Composition, TimelineRef, ViewRef } from '@youi/react-native-youi';

export default function ButtonBack() {
  const inTimelineRef = createRef();

  useEffect(() => {
    if (inTimelineRef.current) inTimelineRef.current.play();
  });

  return (
    <ViewRef name="Btn-Back-Container">
      <TimelineRef name="In" ref={inTimelineRef} />
    </ViewRef>
  );
}
