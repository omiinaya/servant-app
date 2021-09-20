import React from 'react';
import Carousel from "react-material-ui-carousel"
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
    Paper,
    Button,
} from '@material-ui/core';

const styling = {
    Project: {
        position: 'relative',
        height: '300px',
        overflow: 'hidden',
    },
}

const useStyles = makeStyles((theme) => (
    styling
));


const styles = theme => (
    styling
);

function Project(props) {
    const classes = useStyles();
    return (
        <Paper
            className={classes.Project}
            style={{
                backgroundColor: props.item.color,
            }}
            elevation={10}
        >
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

const items = [
    
    {
        name: "Hash Code 2019",
        description: "My Solution on the 2019 Hash Code by Google Slideshow problem.",
        color: "#7D85B1"
    },
    {
        name: "Terrio",
        description: "A exciting mobile game game made in the Unity Engine.",
        color: "#CE7E78"
    },
    {
        name: "React Carousel",
        description: "A Generic carousel UI component for React using material ui.",
        color: "#C9A27E"
    },
    {
        name: "Terrio",
        description: "A exciting mobile game game made in the Unity Engine.",
        color: "#CE7E78"
    },
]

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