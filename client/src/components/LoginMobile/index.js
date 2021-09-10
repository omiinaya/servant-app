import React, { Component } from 'react';
import Login from '../Login';
import NavBar from '../NavBar'


class RegisterMobile extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div>
                    <Login />
                </div>
            </div>
        );
    }
}

export default RegisterMobile;