import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    Button
} from 'reactstrap';
import LoginModal from "../LoginModal"
import RegisterModal from "../RegisterModal"
import SignedInDrawer from "../SignedInDrawer"
import SignedOutDrawer from "../SignedOutDrawer"

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    toggle() {
        this.setState({ isOpen: !this.state.isOpen })
    }

    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        window.open("/", "_self")
    }

    render() {
        const loggedIn = (
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">ServantApp</NavbarBrand>
                <SignedInDrawer />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                        <NavItem>
                            <Button outline color='secondary' onClick={this.logOut.bind(this)}>Logout</Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
        const loggedOut = (
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">ServantApp</NavbarBrand>
                <SignedOutDrawer />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                        <NavItem>
                            <LoginModal
                                type='link'
                                label='Sign In'
                                title='Sign In'
                            />
                        </NavItem>
                        <NavItem>
                            <RegisterModal
                                type='secondary'
                                label='Join'
                                title='Sign Up'
                            />
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
        return (
            <div>{localStorage.usertoken ? loggedIn : loggedOut}</div>
        );
    }
}

export default NavBar;