import React, { Component } from "react";

class BannerMenuTab extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.details}</p>
                <div>
                    <button>{this.props.label}</button>
                    <div>{this.props.extra}</div>
                </div>
            </div>
        )
    }
}

export default BannerMenuTab;