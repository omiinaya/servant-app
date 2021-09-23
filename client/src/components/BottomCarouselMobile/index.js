import React from 'react';
import Carousel from "react-material-ui-carousel"
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
    Paper,
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
    render() {
        const { classes } = this.props
        return (
            <div style={{ color: "#494949" }}>

                <Carousel
                    className={classes.Project}
                    autoPlay={true}
                    animation='fade'
                    indicators={true}
                    timeout={500}
                    navButtonsAlwaysVisible={true}
                    navButtonsAlwaysInvisible={false}

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