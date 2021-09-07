import React, { Component } from "react";
import BannerMenu from '../BannerMenu';
import BannerCarousel from '../BannerCarousel';

class Banner extends Component {
    render() {
        return (
            <div>
                <BannerMenu />
                {/*<BannerCarousel />*/}
            </div>
        )
    }
}

export default Banner;