import React, { Component } from "react";
import { withStyles } from '@material-ui/styles';
import BannerImage from '../../assets/images/banner.jpg';
import NavBar from "../NavBar"
import Banner from "../Banner"

const styles = theme => ({
    root: {
        
    },
    banner: {
        backgroundColor: 'black',
        backgroundImage: `url(${BannerImage})`,
        backgroundSize: '100%',
        height: '63vh'
    }
});

class Home extends Component {

    componentDidMount() {
        console.log('DOM finished loading.')
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <div className={classes.banner}>
                    <NavBar />
                    <Banner />
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Home);