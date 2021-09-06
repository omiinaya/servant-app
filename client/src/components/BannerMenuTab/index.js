import React, { Component } from "react";

class BannerMenuTab extends Component {
    render() {
        return (
            <div>
                <div>{this.props.title}</div>
                <div>{this.props.details}</div>
                <div>
                    <button>{this.props.label}</button>
                    <div>{this.props.extra}</div>
                </div>
            </div>
        )
    }
}

export default BannerMenuTab;