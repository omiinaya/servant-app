import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import BannerCarouselBackground from '../BannerCarousel';
import AppBar from "../AppBar"
import BannerMenu from '../BannerMenu';
import BottomCarousel from '../BottomCarousel';
import BottomAppBar from '../BottomAppBar';
import MapView from '../MapView'
import TEST_NewSignup from '../TEST_NEW_SIGNUP'


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
        [theme.breakpoints.up('lg')]: {
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
            borderBottom: '2px solid gray',
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
        height: '280px',
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: 0,
            width: '100%'
        },
    },
    mobile: {
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'flex'
        },
    },
    test: {
        border: '2px solid black',
        height: '400px',
        width: '400px'
    }
}))


function Home() {
    const classes = useStyles();
    console.log(process.env.REACT_APP_MAPSKEY)
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
            <div className={classes.test}>
                Testing
                <MapView />
            </div>
            <div className={classes.test}>
                Testing 2
                <TEST_NewSignup/>
            </div>
            <div className={classes.mobile}>
                <BottomAppBar />
            </div>
        </div>
    )
}

export default Home;