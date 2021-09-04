import React, { useState } from 'react';
import { 
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody 
} from 'reactstrap';
import Login from '../Login';

const LoginModal = (props) => {

    //props received when calling component
    const {
        className,
    } = props;

    //setting state of modal to false
    const [modal, setModal] = useState(false);

    //toggling modal state to the opposite of current
    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button outline color="link" onClick={toggle}>Sign In</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Sign In</ModalHeader>
                <ModalBody>
                    <Login toggle={toggle} />
                </ModalBody>
            </Modal>
        </div>
    );
}

export default LoginModal;