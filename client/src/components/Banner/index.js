import React from "react";
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BannerMenu from '../BannerMenu';
//import BannerCarousel from '../BannerCarousel';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '50%',
        margin: '4%',
        borderRadius: '1%',
        [theme.breakpoints.down('md')]: {
            width: '50%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '60.5%',
        },
        [theme.breakpoints.down('xs')]: {
            margin: '0%',
            width: '100%',
        },
    }
})
)

function Banner() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box
                boxShadow={3}
                bgcolor="background.paper"
            >
                <BannerMenu />
            </Box>
        </div>
    )
}

export default Banner;