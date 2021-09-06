import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody
} from 'reactstrap';
import Login from '../Login';

const LoginModal = (props) => {

    //setting state of modal to false
    const [modal, setModal] = useState(false);

    //toggling modal state to the opposite of current
    const toggle = () => {
        setModal(!modal)
        console.log(props.test)
    };

    return (
        <div>
            <Button outline color={props.type} onClick={toggle}>{props.label}</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
                <ModalBody>
                    <Login toggle={toggle} />
                </ModalBody>
            </Modal>
        </div>
    );
}

export default LoginModal;