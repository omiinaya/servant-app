import React from 'react';
import {
  Dimensions,
} from 'react-native';

export default class Test extends React.Component {
  constructor() {
    super();

    const isPortrait = () => {
      const dim = Dimensions.get('screen');
      return dim.height >= dim.width;
    };

    this.state = {
      orientation: isPortrait() ? 'portrait' : 'landscape'
    };

    // Event Listener for orientation changes
    Dimensions.addEventListener('change', () => {
      this.setState({
        orientation: isPortrait() ? 'portrait' : 'landscape'
      });
    });

  }

  render() {
    if (this.state.orientation === 'portrait') {
      return (
          //Render View to be displayed in portrait mode
          <div>test1</div>
       );
    }
    else {
      return (
        //Render View to be displayed in landscape mode
        <div>test2</div>
      );
    }
  }
}