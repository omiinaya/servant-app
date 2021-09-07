import React, { Component } from "react";
import { Button, Box } from '@material-ui/core';

const styles = {
    root: {

    },
    title: {
        fontSize: '40px',
        fontFamily: 'MyFont3',
        margin: '2%'
    },
    details: {
        fontFamily: 'MyFont2',
        margin: '2%'
    },
    buttons: {
        fontFamily: 'MyFont2',
        display: 'flex'
    },
    extra: {
        fontFamily: 'MyFont2',
        //
    }
};

class BannerMenuTab extends Component {
    render() {
        return (
            <div style={styles.root}>
                <div style={styles.title}>{this.props.title}</div>
                <div style={styles.details}>{this.props.details}</div>
                <div style={styles.buttons}>
                    <Box m={1}>
                        <Button variant="contained">{this.props.label}</Button>
                    </Box>
                    <Box m={1}>
                        <Button variant="contained">{this.props.label2}</Button>
                    </Box>
                    <div>{this.props.extra}</div>
                </div>
            </div>
        )
    }
}

export default BannerMenuTab;