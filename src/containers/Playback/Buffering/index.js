import React, { createRef, useEffect } from 'react';
import { Composition, TimelineRef } from '@youi/react-native-youi';
import styles from '../style';

const Buffering = () => {
  const inTimelineRef = createRef();
  const outTimelineRef = createRef();
  const loopTimelineRef = createRef();

  useEffect(() => {
    console.log('here', inTimelineRef.current);
    if (inTimelineRef.current) {
      inTimelineRef.current.play();
    }
  }, []);

  return (
    <Composition source="Player_Buffering" style={styles.container}>
      <TimelineRef name="In" ref={inTimelineRef} />
      <TimelineRef name="Out" ref={outTimelineRef} />
      <TimelineRef name="Loop" ref={loopTimelineRef} />
    </Composition>
  );
};

export default Buffering;
