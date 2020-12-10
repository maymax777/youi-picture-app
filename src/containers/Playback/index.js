import React, { createRef, useEffect } from 'react';
import { View } from '@youi/react-native-youi';
import VideoView from './VideoView';
import PlaybackControls from './PlaybackControls';

function Playback() {
  return (
    <View style={{ flex: 1 }}>
      <VideoView style={{ position: 'absolute' }} />
      <PlaybackControls style={{ position: 'absolute' }} />
    </View>
  );
}

export default Playback;
