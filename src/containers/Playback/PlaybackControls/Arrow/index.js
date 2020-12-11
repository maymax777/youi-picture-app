import React, { createRef, useEffect } from 'react';
import { TimelineRef, ViewRef } from '@youi/react-native-youi';

export default function Arrow() {
  const inTimelineRef = createRef();

  useEffect(() => {
    if (inTimelineRef.current) inTimelineRef.current.play();
  });

  return (
    <ViewRef name="Arrow-Container">
      <TimelineRef name="In" ref={inTimelineRef} />
    </ViewRef>
  );
}
