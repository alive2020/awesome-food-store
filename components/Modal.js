import React from 'react';
import { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalTitle } from 'react-bootstrap';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Modal = ({ show, onClose, store }) => {

  const [isPopup, setIsPopup] = useState(false);

  useEffect(() => {
    setIsPopup(true);
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <>
      {/* <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>  */}
      <div>
        <Row>
          <Image src={store.image} />
          <div>
            <h3>{store.name}</h3>
            <p>{store.description}</p>
            <span>
              {store.url ? (
                <a target='_blank' href={store.url}>
                  <i class='fas fa-link'></i>
                  {store.url}
                </a>
              ) : (
                ''
              )}
            </span>
          </div>
          <div>
            <a href='#' onClick={handleClose} />
          </div>
        </Row>
      </div>
    </>
  ) : null;

  if (isPopup) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    );
  } else {
    return null;
  }
};

export default Modal;
