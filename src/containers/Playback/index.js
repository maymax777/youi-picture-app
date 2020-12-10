import React, { useState } from 'react';
import { ButtonRef, View } from '@youi/react-native-youi';
import VideoView from './VideoView';
import PlaybackControls from './PlaybackControls';
import styles from './style';

function Playback() {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.container}>
      <VideoView />
      <PlaybackControls />
    </View>
  );
}

export default Playback;
