import React from 'react';
import Carousel from "react-material-ui-carousel"
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
    Paper,
    Button,
    Card,
    CardMedia,
    Typography,
    Grid,
} from '@material-ui/core';

const styling = {
    Root: {
        height: '370px'

    },
    Project: {
        position: 'relative',
        height: '300px',
        overflow: 'hidden',
    },
    Media: {
        backgroundColor: 'white',
        height: '300px',
        width: '330px',
        overflow: 'hidden',
        position: 'relative',
        transition: '300ms',
        cursor: 'pointer',
        '&:hover': {
            filter: 'brightness(115%)'
        }
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
        height: '23%',
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

const items = [
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
]

function Project(props) {

    const classes = useStyles();
    const item = props.item;
    return (

        <Paper
            className={classes.Project}
            style={{
                backgroundColor: props.item.color,
            }}
            elevation={10}
        >
            <Grid item xs={12} key={item.Name} >
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
        </Paper>
    )
}

class BottomCarouselMobile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            autoPlay: true,
            animation: "fade",
            indicators: true,
            timeout: 500,
            navButtonsAlwaysVisible: false,
            navButtonsAlwaysInvisible: false
        }
    }

    render() {
        const { classes } = this.props
        return (
            <div style={{ color: "#494949" }}>

                <Carousel
                    className={classes.Project}
                    autoPlay={this.state.autoPlay}
                    animation={this.state.animation}
                    indicators={this.state.indicators}
                    timeout={this.state.timeout}
                    navButtonsAlwaysVisible={true}
                    navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}

                >
                    {
                        items.map((item, index) => {
                            return <Project item={item} key={index} />
                        })
                    }
                </Carousel>
            </div>
        )
    }
}

BottomCarouselMobile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomCarouselMobile)