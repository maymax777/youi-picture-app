import React, { createRef, useEffect } from 'react';
import { Composition, VideoRef } from '@youi/react-native-youi';
import styles from '../style';

function VideoView() {
  const videoPlayerRef = createRef();

  const onPlayerReady = () => {
    if (videoPlayerRef.current) videoPlayerRef.current.play();
  };

  return (
    <Composition source="Player_VideoRef" style={styles.container}>
      <VideoRef
        name="Video-Surface-View"
        source={{
          uri:
            'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
          type: 'HLS',
        }}
        ref={videoPlayerRef}
        onReady={onPlayerReady}
      />
    </Composition>
  );
}

export default VideoView;
