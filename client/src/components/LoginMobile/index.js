import React, { Component } from 'react';
import Login from '../Login';
import SignedOutAppBar from '../SignedOutAppBar'


class RegisterMobile extends Component {
    render() {
        return (
            <div>
                <SignedOutAppBar />
                <div>
                    <Login />
                </div>
            </div>
        );
    }
}

export default RegisterMobile;