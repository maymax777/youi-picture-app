import React, { createRef, useEffect } from 'react';
import { ButtonRef, TimelineRef, ViewRef } from '@youi/react-native-youi';

export default function PlayPause() {
  const inTimelineRef = createRef();

  const handlePlayPause = () => {};

  useEffect(() => {
    if (inTimelineRef.current) inTimelineRef.current.play();
  });

  return (
    <ViewRef name="PlayPause-Container">
      <TimelineRef name="In" ref={inTimelineRef} />
      <ButtonRef name="Btn-PlayPause" onPress={handlePlayPause} />
    </ViewRef>
  );
}
