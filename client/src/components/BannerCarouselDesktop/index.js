import React from 'react';
import Carousel from "react-material-ui-carousel"
import { makeStyles } from '@material-ui/core/styles';
import autoBind from "auto-bind"
import './style.scss';
import {
    Card,
    CardMedia,
    Typography,
    Grid,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    Banner: {
        height: '200px',
        position: 'relative'
    },
    Media: {
        backgroundColor: 'white',
        height: '30vh',
        width: '30vh',
        overflow: 'hidden',
        position: 'relative'
    },
    BannerGrid: {
        height: '100%',
        position: 'relative'
    },
    MediaCaption: {
        textOverflow: 'ellipsis',
            position: 'absolute',
            bottom: 0,
            padding: '15px',
            backgroundColor: 'black',
            color: 'white',
            opacity: 0.6,
            width: '100%',
            height: '10vh',
            fontSize: '$header-font-size',
            fontWeight: 200,
            transition: '300ms',
            cursor: 'pointer',
            '&:hover': {
                opacity: 0.8
            }
    }
}));

function Banner(props) {
    const classes = useStyles();
    if (props.newProp) console.log(props.newProp)
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
                Name: "Washing Machine WX9102",
                Image: "https://source.unsplash.com/featured/?washingmachine"
            },
            {
                Name: "Learus Vacuum Cleaner",
                Image: "https://source.unsplash.com/featured/?vacuum,cleaner"
            },
            {
                Name: "Washing Machine WX9103",
                Image: "https://source.unsplash.com/featured/?washingmachine"
            },
            {
                Name: "Learus Vacuum Cleaner2",
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
                Name: "iPhone",
                Image: "https://source.unsplash.com/featured/?iphone"
            },
            {
                Name: "Washing Machine WX9101",
                Image: "https://source.unsplash.com/featured/?washingmachine"
            },
            {
                Name: "Learus Vacuum Cleanerrr",
                Image: "https://source.unsplash.com/featured/?vacuum,cleaner"
            },
            {
                Name: "Washing Machine WX910",
                Image: "https://source.unsplash.com/featured/?washingmachine"
            },
            {
                Name: "Learus Vacuum Cleanerrrr",
                Image: "https://source.unsplash.com/featured/?vacuum,cleaner"
            }
        ]
    }
]

class BannerCarousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            autoPlay: false,
            animation: "fade",
            indicators: false,
            timeout: 500,
            navButtonsAlwaysVisible: true,
            navButtonsAlwaysInvisible: false,
            cycleNavigation: true
        }

        autoBind(this);
    }

    toggleAutoPlay() {
        this.setState({
            autoPlay: !this.state.autoPlay
        })
    }

    toggleIndicators() {
        this.setState({
            indicators: !this.state.indicators
        })
    }

    toggleNavButtonsAlwaysVisible() {
        this.setState({
            navButtonsAlwaysVisible: !this.state.navButtonsAlwaysVisible
        })
    }

    toggleNavButtonsAlwaysInvisible() {
        this.setState({
            navButtonsAlwaysInvisible: !this.state.navButtonsAlwaysInvisible
        })
    }

    toggleCycleNavigation() {
        this.setState({
            cycleNavigation: !this.state.cycleNavigation
        })
    }

    changeAnimation(event) {
        this.setState({
            animation: event.target.value
        })
    }

    changeTimeout(event, value) {
        this.setState({
            timeout: value
        })
    }

    render() {
        return (
            <div style={{ color: "#494949" }}>
                <Carousel
                    className="Example"
                    autoPlay={this.state.autoPlay}
                    animation={this.state.animation}
                    indicators={this.state.indicators}
                    timeout={this.state.timeout}
                    cycleNavigation={this.state.cycleNavigation}
                    navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
                    navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
                    next={(now, previous) => console.log(`Next User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                    prev={(now, previous) => console.log(`Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                    onChange={(now, previous) => console.log(`OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                // fullHeightHover={false}
                // navButtonsProps={{style: {backgroundColor: 'cornflowerblue', borderRadius: 0}}}
                // navButtonsWrapperProps={{style: {bottom: '0', top: 'unset', }}}
                // indicatorContainerProps={{style: {margin: "20px"}}}
                // NextIcon='next'
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

export default BannerCarousel;