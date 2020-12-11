import React, { createRef, useEffect } from 'react';
import { Composition, VideoRef } from '@youi/react-native-youi';
import { VIDEO_FORMAT, PLAYLIST } from '@utils/config';
import styles from '../style';

function VideoView() {
  const videoPlayerRef = createRef();

  const onPlayerReady = () => {
    if (videoPlayerRef.current) {
      videoPlayerRef.current.play();
    }
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
        onReady={onPlayerReady}
      />
    </Composition>
  );
}

export default VideoView;
