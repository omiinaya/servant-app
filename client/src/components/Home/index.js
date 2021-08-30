import React, { Component } from "react";
import PopUp from "../PopUp/"
import Auth from "../Auth"
import NavBar from "../NavBar"

class Home extends Component {

    componentDidMount() {
        console.log('test')
    }

    render() {
        return (
            <div>
                <NavBar />
                <div>Hello World.</div>
                <div>
                    <a href="/default">Route to default.</a>
                </div>
                <div>
                    <PopUp
                        buttonLabel='test'
                        content={<Auth />}
                        title='Sign In to Servant'
                    />
                </div>
            </div>
        )
    }
}

export default Home;