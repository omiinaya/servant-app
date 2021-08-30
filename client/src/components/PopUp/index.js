import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const PopUp = (props) => {
  const {
    buttonLabel,
    className,
    content,
    title
  } = props;

  //setting state of modal to false
  const [modal, setModal] = useState(false);

  //toggling modal state to the opposite of current
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
          {content}
        </ModalBody>
      </Modal>
    </div>
  );
}

export default PopUp ;