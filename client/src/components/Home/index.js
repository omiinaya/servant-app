import React, { Component } from "react";
import PopUp from "../PopUp/"
import Auth from "../Auth"

class Home extends Component {

    componentDidMount() {
        console.log('test')
    }

    render() {
        return (
            <div>
                <div>Hello World.</div>
                <a href="/default">Route to default.</a>
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