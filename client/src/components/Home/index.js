import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import BannerCarouselBackground from '../BannerCarouselBackground';
import AppBar from "../AppBar"
import BannerMenu from '../BannerMenu';
import BottomCarousel from '../BottomCarousel';
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
        display: 'inline-block',
        fontSize: '26px',
        fontFamily: 'MyFont2',
        width: '100%',
        marginTop: '60px',
        marginBottom: '10px',
        paddingLeft: '20px',
        [theme.breakpoints.down('xs')]: {
            marginTop: '40px',
            marginBottom: '10px',
            paddingLeft: '20px',
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
        <div className={classes.root}>
            <AppBar />
            <div className={classes.banner}>
                <BannerCarouselBackground />
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