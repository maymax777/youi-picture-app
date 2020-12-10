import React from 'react';
import { TimelineRef } from '@youi/react-native-youi';

class PromiseTimelineRef extends Component {
  timelineRef = React.createRef();

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
        {...props}
        ref={this.timelineRef}
        onCompleted={() => {
          if (this.resolve) this.resolve('onCompleted');
        }}
      />
    );
  }
}

export default PromiseTimelineRef;
