import React, { Component } from "react";

const styles = {
    title: {
        
    },
    details: {
        color: 'black',
        textDecoration: 'none',
    }
};

class BannerMenuTab extends Component {
    render() {
        return (
            <div>
                <div style={styles.title}>{this.props.title}</div>
                <div style={styles.details}>{this.props.details}</div>
                <div>
                    <button>{this.props.label}</button><button>{this.props.label2}</button>
                    <div>{this.props.extra}</div>
                </div>
            </div>
        )
    }
}

export default BannerMenuTab;