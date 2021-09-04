import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button
} from 'reactstrap';
import LoginModal from "../LoginModal"
import RegisterModal from "../RegisterModal"

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
                <NavbarToggler onClick={() => { this.toggle() }} />
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
                <NavbarToggler onClick={() => { this.toggle() }} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                        <NavItem>
                            <LoginModal />
                        </NavItem>
                        <NavItem>
                            <RegisterModal />
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