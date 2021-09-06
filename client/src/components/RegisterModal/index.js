import React, { useState } from 'react';
import { 
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody 
} from 'reactstrap';
import Register from '../Register'

const RegisterModal = (props) => {

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
            <Button outline color={props.type} onClick={toggle}>{props.label}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
                <ModalBody>
                    <Register toggle={toggle}/>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default RegisterModal;