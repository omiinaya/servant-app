import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import BannerCarousel from '../BannerCarousel';
import AppBar from "../AppBar"
import BannerMenu from '../BannerMenu';
import BottomCarousel from '../BottomCarousel';
import BottomAppBar from '../BottomAppBar';
import TEST_PROPBASED_RENDERING from '../TEST_PROPBASED_RENDERING'


const useStyles = makeStyles((theme) => ({
    banner: {
        width: '100%',
        position: 'absolute',
        zIndex: '1',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    },
    menu: {
        position: 'relative',
        zIndex: '2',
        margin: '25px',
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
            <div>
                <TEST_PROPBASED_RENDERING />
            </div>
            <div className={classes.mobile}>
                <BottomAppBar />
            </div>
        </div>
    )
}

export default Home;