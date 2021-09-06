import React, { Component } from 'react';
import Register from '../Register';
import SignedOutAppBar from '../SignedOutAppBar'


class RegisterMobile extends Component {
    render() {
        return (
            <div>
                <SignedOutAppBar />
                <Register />
            </div>
        );
    }
}

export default RegisterMobile;