import React, { createRef, useEffect } from 'react';
import { Composition, TimelineRef, VideoRef } from '@youi/react-native-youi';
import { View } from 'react-native';

const Playback = () => {
  const videoPlayerRef = createRef();
  const onPlayerReady = () => {
    if (videoPlayerRef.current) videoPlayerRef.current.play();
  };

  return (
    <View style={{ flex: 1 }}>
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
    </View>
  );
};

export default Playback;
