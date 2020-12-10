import React, { createRef, useEffect } from 'react';
import { Composition, TimelineRef } from '@youi/react-native-youi';

const Playback = () => {
  const inTimeline = createRef();

  useEffect(() => {}, []);

  return (
    <Composition source="Main">
      <TimelineRef name="In" ref={inTimeline} />
    </Composition>
  );
};

export default Playback;
