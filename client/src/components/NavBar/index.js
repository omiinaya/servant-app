import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import PopUp from "../PopUp/"
import Register from "../Register"

const NavBar = (props) => {

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
                                content={<Register />}
                                title='Sign In'
                                style="link"
                            />
                        </NavItem>
                        <NavItem>
                            <PopUp
                                buttonLabel='Join'
                                content={<Register />}
                                title='Sign Up'
                                style="danger"
                            />
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;