import React, { useEffect } from 'react';
import Carousel from "react-material-ui-carousel"
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { mobileStyles, desktopStyles } from './styles';
import { getDeviceType, isPortrait } from '../../scripts'
import {
    Dimensions,
} from 'react-native';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Grid,
} from '@material-ui/core';

function styleHandlerForClass() {
    if (getDeviceType() === 'mobile') {
        return styles
    } else {
        return styles2
    }
}

function styleHandlerForFunction() {
    if (getDeviceType() === 'mobile') {
        return mobileStyles
    } else {
        return desktopStyles
    }
}

const useStyles = makeStyles((theme) => (
    stylesForFunction
));

//mobile landscape
const styles = theme => ({
    mobileStyles
});

//desktop
const styles2 = theme => ({
    desktopStyles
});

const stylesForClass = styleHandlerForClass()
const stylesForFunction = styleHandlerForFunction()

function Banner(props) {
    const classes = useStyles();
    if (props.newProp) console.log(props.newProp)
    const contentPosition = props.contentPosition ? props.contentPosition : "left"
    //calculate this based on screenspace instead
    const totalItems = props.length ? props.length : 6;
    const mediaLength = totalItems;

    let rows = [];

    const content = (
        <Grid item xs={12} key="content">
            <CardContent className={classes.Content}>
                <Typography className={classes.Title}>
                    {props.item.Name}
                </Typography>

                <Typography className={classes.Caption}>
                    {props.item.Caption}
                </Typography>
            </CardContent>
        </Grid>
    )

    if (getDeviceType() === 'other') {
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
        }
    }

    if (getDeviceType() === 'mobile') {
        if (contentPosition === "left") {
            rows.unshift(content);
        } else if (contentPosition === "right") {
            rows.push(content);
        } else if (contentPosition === "middle") {
            rows.splice(rows.length / 2, 0, content);
        }
    }

    function orientationHandler(props) {
        console.log(getDeviceType())
        console.log(isPortrait())
        if (getDeviceType() === 'mobile' && !isPortrait()) {
            console.log('test1')
        }
        if (getDeviceType() === 'mobile' && isPortrait()) {
            console.log('test2')
        }
    }

    useEffect(() => {
        const callback = () => {
            console.log(isPortrait())
            orientationHandler(props)
        };

        Dimensions.addEventListener('change', callback);

        return () => {
            Dimensions.removeEventListener('change', callback);
        };

    }, []);

    return (
        <Card raised className={classes.Banner}>
            <Grid container spacing={5} className={classes.BannerGrid}>
                {rows}
            </Grid>
        </Card>
    )
}

const desktopRows = [
    {
        Name: "01",
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
            }
        ]
    },
    {
        Name: "02",
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

const mobileRows = [
    {
        Name: "Electronics",
        Caption: "Electrify your friends!",
    },
    {
        Name: "Appliances",
        Caption: "Say no to manual labour!",
    }
]

function test() {
    if (getDeviceType() === 'mobile') {
        return mobileRows
    } else {
        return desktopRows
    }
}

var rows = test()

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

export default withStyles(stylesForClass)(BannerCarousel);