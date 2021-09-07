import React, { Component } from "react";
import { withStyles } from '@material-ui/styles';
import NavBar from "../NavBar"
import Banner from "../Banner"

const styles = theme => ({
    root: {

    }
});

class Home extends Component {

    componentDidMount() {
        console.log('DOM finished loading.')
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <NavBar />
                <Banner />
            </div>
        )
    }
}

export default withStyles(styles)(Home);