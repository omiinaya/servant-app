import React from 'react';
import Carousel from "react-material-ui-carousel"
import { makeStyles, withStyles } from '@material-ui/core/styles';
import autoBind from "auto-bind"
import {
    Card,
    CardMedia,
    Grid,
} from '@material-ui/core';

const styling = {
    Root: {
        height: '345px'
    },
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
        fontSize: '25px',
        fontWeight: 200,
        transition: '300ms',
        cursor: 'pointer',
        '&:hover': {
            opacity: 0.8
        }
    }
}

const useStyles = makeStyles((theme) => (
    styling
));

const styles = theme => (
    styling
);

function Banner(props) {
    const classes = useStyles();
    if (props.newProp) console.log(props.newProp)
    //calculate this based on screenspace instead
    const totalItems = props.length ? props.length : 1;
    const mediaLength = totalItems;

    let rows = [];

    for (let i = 0; i < mediaLength; i++) {
        const item = props.item.Items[i];
        console.log(mediaLength)
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
    constructor(props) {
        super(props);

        this.state = {
            autoPlay: true,
            animation: "fade",
            indicators: true,
            timeout: 100,
            navButtonsAlwaysVisible: false,
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
        const { classes } = this.props
        return (
            <div style={{ color: "#494949" }}>
                <Carousel
                    className={classes.Root}
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

export default withStyles(styles)(BannerCarousel);