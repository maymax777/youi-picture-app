import React, { createRef, useEffect } from 'react';
import {
  ButtonRef,
  Composition,
  TimelineRef,
  ViewRef,
} from '@youi/react-native-youi';
import styles from '../style';
import ButtonBack from './ButtonBack';
import Arrow from './Arrow';

const TIMELINE_VISIBLE_LIMIT = 15000;

function PlaybackControls() {
  const inTimelineRef = createRef();
  const outTimelineRef = createRef();

  useEffect(() => {
    if (inTimelineRef.current) {
      inTimelineRef.current.play();
    }
  });

  /**
   * Auto hide timeline bar after some seconds
   * @TIMELINE_VISIBLE_LIMIT
   */
  const inTimelineCompleted = () => {
    setTimeout(() => {
      if (outTimelineRef.current) outTimelineRef.current.play();
    }, TIMELINE_VISIBLE_LIMIT);
  };
  return (
    <Composition
      source="Player_Playback-Controls"
      style={{ position: 'absolute' }}
    >
      <TimelineRef
        name="In"
        ref={inTimelineRef}
        onCompleted={inTimelineCompleted}
      />
      <TimelineRef name="Out" ref={outTimelineRef} />
      <ButtonBack />
      <Arrow />
    </Composition>
  );
}

export default PlaybackControls;
