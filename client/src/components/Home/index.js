import React, { Component } from "react";
import NavBar from "../NavBar"

class Home extends Component {

    componentDidMount() {
        console.log('DOM finished loading.')
    }

    render() {
        return (
            <div>
                <NavBar />
                <a href="/default">Hello World.</a>
            </div>
        )
    }
}

export default Home;