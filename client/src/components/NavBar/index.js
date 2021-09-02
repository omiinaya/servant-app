import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import PopUp from "../PopUp/"
import Login from "../Login"
import Register from "../Register"
//import { isLoggedIn } from './scripts';

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

    render() {
        const loggedIn = (
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">ServantApp</NavbarBrand>
                <NavbarToggler onClick={() => { this.toggle() }} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                        <NavItem>
                            <PopUp
                                buttonLabel='Logout'
                                content={<Register />}
                                title='Sign Up'
                                color="secondary"
                            />
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
                            <PopUp
                                buttonLabel='Sign In'
                                content={<Login />}
                                title='Sign In'
                                color="link"
                            />
                        </NavItem>
                        <NavItem>
                            <PopUp
                                buttonLabel='Join'
                                content={<Register />}
                                title='Sign Up'
                                color="secondary"
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