import React, { Component } from "react";
import NavBar from "../NavBar"
import RegisterPage from "../RegisterPage"

class Home extends Component {

    componentDidMount() {
        console.log('DOM finished loading.')
    }

    render() {
        return (
            <div>
                <NavBar />
                <a href="/default">Hello World.</a>
                <RegisterPage />
            </div>
        )
    }
}

export default Home;