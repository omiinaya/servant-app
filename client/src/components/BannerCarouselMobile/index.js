import React from 'react';
import Carousel from "react-material-ui-carousel"
import { makeStyles } from '@material-ui/core/styles';
import autoBind from "auto-bind"
import {
    Card,
    CardContent,
    Typography,
    Grid
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    Banner: {
        height: '300px',
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
        fontSize: '25px',
        fontWeight: 200,
        transition: '300ms',
        cursor: 'pointer',
        '&:hover': {
            opacity: 0.8
        }
    },
    Content: {
        color: 'white',
        backgroundColor: 'rgb(119, 24, 24)',
        height: '40vh',
        position: 'relative',
        cursor: 'pointer',
        padding: '30px',
        transition: '300ms',
        '&:hover': {
            backgroundColor: 'rgb(87, 17, 17)e',
        },
        '&:active': {
            backgroundColor: 'rgb(87, 17, 17)',
        },
    },
    ViewButton: {
        backgroundColor: 'rgb(241, 241, 241)',
        color: 'rgb(119, 24, 24)'
    },
    Title: {
        fontSize: '40px',
        fontWeight: 500
    },
    Caption: {
        marginTop: '10px',
        fontSize: '21px'
    },
    ViewButton2: {
        marginTop: '40px',
        color: 'white',
        fontSize: '25px',
        border: '3px solid white',
        textTransform: 'capitalize',
        transition: '200ms'
    }
}));

function Banner(props) {
    const classes = useStyles();
    if (props.newProp) console.log(props.newProp)
    const contentPosition = props.contentPosition ? props.contentPosition : "left"

    let items = [];
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

    if (contentPosition === "left") {
        items.unshift(content);
    } else if (contentPosition === "right") {
        items.push(content);
    } else if (contentPosition === "middle") {
        items.splice(items.length / 2, 0, content);
    }

    return (
        <Card raised className={classes.Banner}>
            <Grid container spacing={7} className={classes.BannerGrid}>
                {items}
            </Grid>
        </Card>
    )
}

const items = [
    {
        Name: "Electronics",
        Caption: "Electrify your friends!",
        contentPosition: "left",
    },
    {
        Name: "Appliances",
        Caption: "Say no to manual labour!",
        contentPosition: "middle",
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
                        items.map((item, index) => {
                            return <Banner item={item} key={index} contentPosition={item.contentPosition} />
                        })
                    }
                </Carousel>
            </div>
        )
    }
}

export default BannerCarousel;