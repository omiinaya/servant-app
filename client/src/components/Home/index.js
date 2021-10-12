import React from "react";
import BannerCarousel from '../BannerCarousel';
import AppBar from "../AppBar"
import BannerMenu from '../BannerMenu';
import BottomCarousel from '../BottomCarousel';
import BottomAppBar from '../BottomAppBar';
import styles from './styles'

function Home() {
    const classes = styles();
    return (
        <div className={classes.root}>
            <AppBar />
            <div className={classes.banner}>
                <BannerCarousel />
            </div>
            <div className={classes.menu}>
                <BannerMenu />
            </div>
            <div className={classes.title}>
                Popular Categories
            </div>
            <div className={classes.carousel}>
                <BottomCarousel />
            </div>
            <div className={classes.title}>
                Popular Services
            </div>
            <div className={classes.mobile}>
                <BottomAppBar />
            </div>
        </div>
    )
}

export default Home;