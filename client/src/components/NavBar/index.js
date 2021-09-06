import React from 'react';
import SignedInAppBar from "../SignedInAppBar"
import SignedOutAppBar from "../SignedOutAppBar"

class NavBar extends React.Component {
    render() {
        return (
            <div>{localStorage.usertoken ? <SignedInAppBar /> : <SignedOutAppBar />}</div>
        );
    }
}

export default NavBar;