import React, { createRef, useEffect } from 'react';
import { Composition, TimelineRef, ViewRef } from '@youi/react-native-youi';

function PlaybackControls() {
  const inTimelineRef = createRef();
  const outTimelineRef = createRef();

  useEffect(() => {
    if (inTimelineRef.current) inTimelineRef.current.play();
  });

  return (
    <Composition
      source="Player_Playback-Controls"
      style={{ positoin: 'absolute' }}
    >
      <TimelineRef name="In" ref={inTimelineRef} />
      <TimelineRef name="Out" ref={outTimelineRef} />
      <ViewRef name="Btn-Back-Container" />
      <ViewRef name="Placeholder-Time" />
    </Composition>
  );
}

export default PlaybackControls;
