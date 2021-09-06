import React, { Component } from "react";
import NavBar from "../NavBar"
import PrimaryAppBar from "../SignedInAppBar"

class Home extends Component {

    componentDidMount() {
        console.log('DOM finished loading.')
    }

    render() {
        return (
            <div>
                <NavBar />
                <PrimaryAppBar />
                <a href="/default">Hello World.</a>
            </div>
        )
    }
}

export default Home;