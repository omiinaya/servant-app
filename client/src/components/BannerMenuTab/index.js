import React, { Component } from "react";
import { Button, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = {
    root: {

    },
    title: {
        fontSize: '40px',
        fontFamily: 'MyFont3',
        margin: '1.5vh'
    },
    details: {
        fontFamily: 'MyFont2',
        margin: '1.5vh'
    },
    buttons: {
        fontFamily: 'MyFont2',
        display: 'flex'
    }
};

class BannerMenuTab extends Component {
    render() {
        return (
            <div style={styles.root}>
                <div style={styles.title}>{this.props.title}</div>
                <div style={styles.details}>{this.props.details}</div>
                <div style={styles.buttons}>
                    <Link to={this.props.link1}>
                        <Box m={1}>
                            <Button variant="contained" color="primary">{this.props.label1}</Button>
                        </Box>
                    </Link>
                    <Link to={this.props.link2}>
                        <Box m={1}>
                            <Button variant="contained" color="primary">{this.props.label2}</Button>
                        </Box>
                    </Link>
                </div>
            </div>
        )
    }
}

export default BannerMenuTab;