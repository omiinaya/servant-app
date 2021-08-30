import React, { useState } from 'react';
import { 
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody 
} from 'reactstrap';

const PopUp = (props) => {

    //props received when calling component
    const {
        buttonLabel,
        className,
        content,
        title,
        color
    } = props;

    //setting state of modal to false
    const [modal, setModal] = useState(false);

    //toggling modal state to the opposite of current
    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button outline color={color} onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>{title}</ModalHeader>
                <ModalBody>
                    {content}
                </ModalBody>
            </Modal>
        </div>
    );
}

export default PopUp;