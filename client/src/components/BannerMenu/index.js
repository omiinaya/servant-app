import React from 'react';
import BannerMenuDesktop from '../BannerMenuDesktop'
import BannerMenuMobile from '../BannerMenuMobile'
import { isPortrait } from '../../scripts'
import {
  Dimensions,
} from 'react-native';

export default class BottomCarousel extends React.Component {
  constructor() {
    super();

    this.state = {
      orientation: isPortrait() ? 'portrait' : 'landscape'
    };

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
          <BannerMenuMobile />
       );
    }
    else {
      return (
        //Render View to be displayed in landscape mode
        <BannerMenuDesktop />
      );
    }
  }
}