import React, { Component } from "react";
import NavBar from "../NavBar"
import Banner from "../Banner"

const styles = {
    root: {
        //backgroundColor: 'black',
        //height: '100vh'
    }
};

class Home extends Component {

    componentDidMount() {
        console.log('DOM finished loading.')
    }

    render() {
        return (
            <div style={styles.root}>
                <NavBar />
                <Banner />
            </div>
        )
    }
}

export default Home;