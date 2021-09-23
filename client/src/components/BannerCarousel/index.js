import React from 'react';
import Carousel from "react-material-ui-carousel"
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { isPortrait } from '../../scripts'
import {
    Dimensions,
} from 'react-native';
import {
    Card,
    CardMedia,
    Grid,
} from '@material-ui/core';

const styling = {
    RootDesktop: {
        height: '335px',
    },
    RootMobile: {
        height: '275px'
    },
    Test: {
        height: '300px'
    },
    Banner: {
        width: '100%',
        position: 'relative',
        borderRadius: 0,
    },
    Media: {
        backgroundColor: 'white',
        height: '345px',
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

function Banner(props) {
    const classes = useStyles();
    if (props.newProp) console.log(props.newProp)
    //calculate this based on screenspace instead
    const totalItems = props.length ? props.length : 1;
    const mediaLength = totalItems;

    let rows = [];

    for (let i = 0; i < mediaLength; i++) {
        const item = props.item.Items[i];
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
    constructor() {
        super();
        this.state = {
            orientation: isPortrait() ? 'portrait' : 'landscape'
        };

        // Event Listener for orientation changes
        Dimensions.addEventListener('change', () => {
            this.setState({
                orientation: isPortrait() ? 'portrait' : 'landscape'
            });
        });
    }
    render() {
        const { classes } = this.props
        if (this.state.orientation === 'portrait') {
            return (
                //Render View to be displayed in portrait mode
                <div>This component should not render in portrait.</div>
            );
        }
        else {
            return (
                //Render View to be displayed in landscape mode
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
                                return <Banner item={item} key={index} contentPosition={item.contentPosition} />
                            })
                        }
                    </Carousel>
                </div>
            );
        }
    }
}

export default withStyles(styling)(BannerCarousel);