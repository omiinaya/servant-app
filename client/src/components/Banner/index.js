import React, { Component } from "react";
import { Box } from '@material-ui/core';
import BannerMenu from '../BannerMenu';
//import BannerCarousel from '../BannerCarousel';

const styles = {
    root: {
        width: '50%',
        //border: '2px solid black',
        margin: '4%',
        borderRadius: '1%'
    }
};

class Banner extends Component {
    render() {
        return (
            <Box
                boxShadow={3}
                bgcolor="background.paper"
                m={0}
                p={0}
                style={styles.root}
            >
                <BannerMenu />
            </Box>
        )
    }
}

export default Banner;