import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import BannerCarouselBackground from '../BannerCarouselBackground';
import NavBar from "../NavBar"
import BannerMenu from '../BannerMenu';
import BannerCarousel from '../BannerCarousel';
import BottomAppBar from '../BottomAppBar';

const useStyles = makeStyles((theme) => ({
    banner: {
        width: '100%',
        position: 'absolute',
        zIndex: '-1',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    },
    menu: {
        margin: '4vh',
        [theme.breakpoints.down('lg')]: {
            width: '560px',
        },
        [theme.breakpoints.down('md')]: {
            width: '560px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '560px',
        },
        [theme.breakpoints.down('xs')]: {
            margin: '0%',
            width: '100%',
        },
    },
    title: {
        fontSize: '26px',
        fontFamily: 'MyFont2',
        margin: '9vh',
        marginTop: '10vh',
        marginBottom: '1vh',
        [theme.breakpoints.down('xs')]: {
            margin: '2.5vh',
            marginTop: '5vh',
            marginBottom: '1.5vh',
        },
    },
    carousel: {
        [theme.breakpoints.down('xs')]: {
            margin: '5%',
            marginTop: 0,
            width: '90%'
        },
    },
    mobile: {
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'flex'
        },
    },
}))

function Home() {
    const classes = useStyles();
    return (
        <div>
            <NavBar />
            <div className={classes.banner}>
                <BannerCarouselBackground />
            </div>
            <div className={classes.menu}>
                <BannerMenu />
            </div>
            <div className={classes.title}>
                Popular services
            </div>
            <div className={classes.carousel}>
                <BannerCarousel />
            </div>
            <div className={classes.mobile}>
                <BottomAppBar />
            </div>
        </div >
    )
}

export default Home;