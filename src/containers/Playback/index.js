import React, { useState, useEffect } from 'react';
import { ButtonRef, View, Input } from '@youi/react-native-youi';
import VideoView from './VideoView';
import PlaybackControls from './PlaybackControls';
import styles from './style';

function Playback({ navigation }) {
  const [loading, setLoading] = useState(true);
  const keys = ['Space', 'Play', 'MediaPlay', 'MediaPlayPause'];

  useEffect(() => {
    keys.forEach((key) => Input.addEventListener(key, registerUserActivity));
    return () => {
      keys.forEach((key) =>
        Input.removeEventListener(key, registerUserActivity),
      );
    };
  }, []);

  const registerUserActivity = (keyEvent) => {};

  return (
    <View style={styles.container}>
      <VideoView />
      <PlaybackControls navigation={navigation} />
    </View>
  );
}

export default Playback;
