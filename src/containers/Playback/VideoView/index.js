import React, { createRef, useEffect } from 'react';
import { Composition, VideoRef } from '@youi/react-native-youi';
import { VIDEO_FORMAT, PLAYLIST } from '@utils/config';
import styles from '../style';

function VideoView({ setCurrentTime }) {
  const videoPlayerRef = createRef();

  const handlePlayerReady = () => {
    if (videoPlayerRef.current) {
      videoPlayerRef.current.play();
    }
  };

  const handleCurrentTimeUpdated = (currentTime) => {
    currentTime = parseInt(+currentTime / 1000);
    let [hours, minutes, seconds] = [
      0,
      parseInt(currentTime / 60),
      currentTime % 60,
    ];
    [hours, minutes] = [parseInt(minutes / 60), minutes % 60];
    const formattedCurrentTime = `${String(hours).padStart(2, '0')}:${String(
      minutes,
    ).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    // setCurrentTime(formattedCurrentTime);
  };

  return (
    <Composition source="Player_VideoRef" style={styles.container}>
      <VideoRef
        name="Video-Surface-View"
        source={{
          uri: PLAYLIST,
          type: VIDEO_FORMAT,
        }}
        ref={videoPlayerRef}
        onReady={handlePlayerReady}
        onCurrentTimeUpdated={handleCurrentTimeUpdated}
      />
    </Composition>
  );
}

export default VideoView;
