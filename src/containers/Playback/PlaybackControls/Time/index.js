import React, { createRef, useEffect } from 'react';
import { TimelineRef, TextRef } from '@youi/react-native-youi';

export default function Time() {
  const inTimelineRef = createRef();

  useEffect(() => {
    if (inTimelineRef.current) inTimelineRef.current.play();
  });

  return <TextRef name="Placeholder-Time" text="00:00" />;
}
