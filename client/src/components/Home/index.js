import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import BannerImage from '../../assets/images/banner.jpg';
import NavBar from "../NavBar"
import { Box } from '@material-ui/core';
import BannerMenu from '../BannerMenu';
import BannerCarousel from '../BannerCarousel';

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
        fontFamily: 'MyFont3',
        marginTop: '4vh',
        margin: '4vh',
    },
    carousel: {
        //carousel rules
    },
    banner: {
        backgroundColor: 'black',
        backgroundImage: `url(${BannerImage})`,
        backgroundSize: '100%',
        [theme.breakpoints.down('lg')]: {
            height: '56vh',
        },
        [theme.breakpoints.down('md')]: {
            height: '56vh',
        },
        [theme.breakpoints.down('sm')]: {
            height: '56vh',
        },
        [theme.breakpoints.down('xs')]: {
            height: '0vh',
        },
    },
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

            </div>
        </div>
    )
}

export default Home;