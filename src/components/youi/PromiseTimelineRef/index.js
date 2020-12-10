import React, { Component, createRef } from 'react';
import { TimelineRef } from '@youi/react-native-youi';

class PromiseTimelineRef extends Component {
  timelineRef = createRef();

  componentDidMount() {
    if (this.props.autoplay) this.play();
  }

  play = () =>
    new Promise((resolve) => {
      this.resolve = resolve;
      this.ref.play();
    });

  render() {
    return (
      <TimelineRef
        {...this.props}
        ref={this.timelineRef}
        onCompleted={() => {
          if (this.resolve) this.resolve('onCompleted');
        }}
      />
    );
  }
}

export default PromiseTimelineRef;
