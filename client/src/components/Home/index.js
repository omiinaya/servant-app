import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import BannerCarouselBackground from '../BannerCarouselBackground';
import NavBar from "../NavBar"
import { Box } from '@material-ui/core';
import BannerMenu from '../BannerMenu';
import BannerCarousel from '../BannerCarousel';
import BottomAppBar from '../BottomAppBar';

const useStyles = makeStyles((theme) => ({
    banner: {
        //display: 'flex',
        width: '100%',
    },
    card: {
        margin: '4vh',
        borderRadius: '1%',
        [theme.breakpoints.down('lg')]: {
            width: '60vh',
        },
        [theme.breakpoints.down('md')]: {
            width: '60vh',
        },
        [theme.breakpoints.down('sm')]: {
            width: '60vh',
        },
        [theme.breakpoints.down('xs')]: {
            margin: '0%',
            width: '100%',
        },
    },
    title: {
        fontSize: '26px',
        fontFamily: 'MyFont2',
        margin: '3vh',
        marginTop: '12vh',
        marginBottom: '1vh',
        [theme.breakpoints.down('xs')]: {
            margin: '2.5vh',
            marginTop: '5vh',
            marginBottom: '1.5vh',
        },
    },
    carousel: {
        [theme.breakpoints.down('xs')]: {

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
            <div>
                <div className={classes.card}>
                    <Box
                        boxShadow={3}
                        bgcolor="background.paper"
                    >
                        <BannerMenu />
                    </Box>
                </div>
            </div>
            <div>
                <div className={classes.title}>
                    Popular services
                </div>
                <div className={classes.carousel}>
                    <BannerCarousel />
                </div>
                <div className={classes.mobile}>
                    <BottomAppBar />
                </div>
            </div>
        </div >
    )
}

export default Home;