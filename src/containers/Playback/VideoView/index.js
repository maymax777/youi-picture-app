import React, { createRef, useEffect } from 'react';
import {
  Composition,
  TimelineRef,
  VideoRef,
  View,
  ButtonRef,
  ViewRef,
} from '@youi/react-native-youi';

function VideoView() {
  const videoPlayerRef = createRef();

  const onPlayerReady = () => {
    if (videoPlayerRef.current) videoPlayerRef.current.play();
  };

  return (
    <Composition source="Player_Main">
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
