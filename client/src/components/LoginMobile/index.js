import React, { Component } from 'react';
import Login from '../Login';
import AppBar from '../AppBar'


class RegisterMobile extends Component {
    render() {
        return (
            <div>
                <AppBar />
                <div>
                    <Login />
                </div>
            </div>
        );
    }
}

export default RegisterMobile;