import React from 'react';
import Carousel from "react-material-ui-carousel"
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { getDeviceType } from '../../scripts'
import {
    Card,
    CardMedia,
    Grid,
} from '@material-ui/core';

//switching styles depending on device type."
function styleHandler() {
    if (getDeviceType() === 'mobile') {
        return styles
    } else {
        return styles2
    }
}

const styling = {
    Banner: {
        width: '100%',
        position: 'relative',
        borderRadius: 0,
    },
    Media: {
        backgroundColor: 'white',
        height: '370px',
        width: '100%',
        overflow: 'hidden',
        position: 'relative'
    },
    BannerGrid: {
        height: '100%',
        position: 'relative'
    },
}

const useStyles = makeStyles((theme) => (
    styling
));
//mobile landscape
const styles = theme => ({
    Root: {
        height: '345px',
        [theme.breakpoints.down('md')]: {
            height: '300px'
        },
        Test: {
            height: '300px'
        }
    },
});

//desktop
const styles2 = theme => ({
    Root: {
        height: '345px',
        [theme.breakpoints.down('md')]: {
            height: '350px'
        },
    },
    Test: {
        height: '307px',
    }
});

const style = styleHandler()

function Banner(props) {
    const classes = useStyles();
    if (props.newProp) console.log(props.newProp)
    //calculate this based on screenspace instead
    const totalItems = props.length ? props.length : 1;
    const mediaLength = totalItems;

    let rows = [];

    for (let i = 0; i < mediaLength; i++) {
        const item = props.item.Items[i];
        //console.log(mediaLength)
        const media = (
            <Grid item xs={12 / totalItems} key={item.Name} >
                <CardMedia
                    className={classes.Media}
                    image={item.Image}
                    title={item.Name}
                >
                </CardMedia>
            </Grid>
        )
        rows.push(media);
    }

    return (
        <Card raised className={classes.Banner}>
            <Grid container spacing={5} className={classes.BannerGrid}>
                {rows}
            </Grid>
        </Card>
    )
}

const rows = [
    {
        Items: [
            {
                Name: "Macbook Pro",
                Image: "https://source.unsplash.com/featured/?macbook"
            }
        ]
    },
    {
        Items: [
            {
                Name: "iPhone",
                Image: "https://source.unsplash.com/featured/?iphone"
            }
        ]
    },
    {
        Items: [
            {
                Name: "Washing Machine WX9102",
                Image: "https://source.unsplash.com/featured/?washingmachine"
            }
        ]
    }
]

class BannerCarousel extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <div style={{ color: "#494949" }}>
                <Carousel
                    className={classes.Root}
                    autoPlay={true}
                    animation="fade"
                    indicators={true}
                    timeout={100}
                    cycleNavigation={true}
                    navButtonsAlwaysVisible={false}
                    navButtonsAlwaysInvisible={false}
                >
                    {
                        rows.map((item, index) => {
                            return (
                                <div className={classes.Test}>
                                <Banner item={item} key={index} contentPosition={item.contentPosition} />
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        )
    }
}

export default withStyles(style)(BannerCarousel);