import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import BannerImage from '../../assets/images/banner.jpg';
import NavBar from "../NavBar"
import { Box } from '@material-ui/core';
import BannerMenu from '../BannerMenu';
import BannerCarousel from '../BannerCarousel';
import BottomAppBar from '../BottomAppBar';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '40%',
        margin: '4vh',
        borderRadius: '1%',
        [theme.breakpoints.down('lg')]: {
            width: '75vh',
        },
        [theme.breakpoints.down('md')]: {
            width: '75vh',
        },
        [theme.breakpoints.down('sm')]: {
            width: '75vh',
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
        margin: '5%',
        marginTop: 0,
        width: '90%'
    },
    banner: {
        backgroundColor: 'black',
        backgroundImage: `url(${BannerImage})`,
        backgroundSize: '100%',
        [theme.breakpoints.down('lg')]: {
            height: '56vh',
        },
        [theme.breakpoints.down('xs')]: {
            height: '0vh',
        },
    },
    mobile: {
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'flex'
        },
    }
}))

function Home() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.banner}>
                <NavBar />
                <div className={classes.root}>
                    <Box
                        boxShadow={3}
                        bgcolor="background.paper"
                    >
                        <BannerMenu />
                    </Box>
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
            </div>
        </div>
    )
}

export default Home;