import React, { Component } from "react";
import NavBar from "../NavBar"
import Banner from "../Banner"

class Home extends Component {

    componentDidMount() {
        console.log('DOM finished loading.')
    }

    render() {
        return (
            <div>
                <NavBar />
                <Banner />
            </div>
        )
    }
}

export default Home;