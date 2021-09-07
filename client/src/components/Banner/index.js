import React from "react";
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BannerMenu from '../BannerMenu';
import BannerCarousel from '../BannerCarousel';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '40%',
        margin: '3%',
        borderRadius: '1%',
        [theme.breakpoints.down('lg')]: {
            width: '37%',
        },
        [theme.breakpoints.down('md')]: {
            width: '57%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '70%',
        },
        [theme.breakpoints.down('xs')]: {
            margin: '0%',
            width: '100%',
        },
    },
    carousel: {
        //carousel rules
        marginTop: '6.5%',
    }
})
)

function Banner() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <Box
                    boxShadow={3}
                    bgcolor="background.paper"
                >
                    <BannerMenu />
                </Box>
            </div>
            <div className={classes.carousel}>
                <BannerCarousel />
            </div>
        </div>
    )
}

export default Banner;