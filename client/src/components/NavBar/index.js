import React, { useState } from 'react';
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

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">ServantApp</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
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
        </div>
    );
}

export default NavBar;