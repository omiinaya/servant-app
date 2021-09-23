import React from 'react';
import Carousel from "react-material-ui-carousel"
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
    Card,
    CardMedia,
    Typography,
    Grid,
} from '@material-ui/core';
import style from './styles'

const useStyles = makeStyles((theme) => (
    style
));

const styles = theme => (
    style
);

function Banner(props) {
    const classes = useStyles();
    if (props.newProp) console.log(props.newProp)
    //calculate this based on screenspace instead
    const totalItems = props.length ? props.length : 6;
    const mediaLength = totalItems;

    let rows = [];

    for (let i = 0; i < mediaLength; i++) {
        const item = props.item.Items[i];

        const media = (
            <Grid item xs={12 / totalItems} key={item.Name}>
                <CardMedia
                    className={classes.Media}
                    image={item.Image}
                    title={item.Name}
                >
                    <Typography className={classes.MediaCaption}>
                        {item.Name}
                    </Typography>
                </CardMedia>
            </Grid>
        )
        rows.push(media);
        /*
        if (rows.length >= 6) {
            console.log(rows)
        }
        */
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
            },
            {
                Name: "iPhone",
                Image: "https://source.unsplash.com/featured/?iphone"
            },
            {
                Name: "Washing Machine",
                Image: "https://source.unsplash.com/featured/?washingmachine"
            },
            {
                Name: "Vacuum Cleaner",
                Image: "https://source.unsplash.com/featured/?vacuum,cleaner"
            },
            {
                Name: "Washing Machne",
                Image: "https://source.unsplash.com/featured/?washingmachine"
            },
            {
                Name: "Vaccuum Cleaner",
                Image: "https://source.unsplash.com/featured/?vacuum,cleaner"
            },
        ]
    },
    {
        Items: [
            {
                Name: "Macbook Pro",
                Image: "https://source.unsplash.com/featured/?macbook"
            },
            {
                Name: "iPhonee",
                Image: "https://source.unsplash.com/featured/?iphone"
            },
            {
                Name: "Washing Machin",
                Image: "https://source.unsplash.com/featured/?washingmachine"
            },
            {
                Name: "Vacuum Cleanerrr",
                Image: "https://source.unsplash.com/featured/?vacuum,cleaner"
            },
            {
                Name: "Washin Machine",
                Image: "https://source.unsplash.com/featured/?washingmachine"
            },
            {
                Name: "Vacuum Cleanerrrr",
                Image: "https://source.unsplash.com/featured/?vacuum,cleaner"
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
                    autoPlay={false}
                    animation="slide"
                    indicators={false}
                    timeout={350}
                    cycleNavigation={true}
                    navButtonsAlwaysVisible={true}
                    navButtonsAlwaysInvisible={false}
                >
                    {
                        rows.map((item, index) => {
                            return <Banner item={item} key={index} contentPosition={item.contentPosition} />
                        })
                    }
                </Carousel>
            </div>
        )
    }
}

BannerCarousel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BannerCarousel);