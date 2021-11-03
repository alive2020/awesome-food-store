import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
// import StoreItem from './StoreItem';
import styles from '../styles/Stores.module.css';
import Modal from './Modal';

const StoresList = ({ stores }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.storeImg}>
      <Container fluid>
        <h3 className='text-center'>Our Stores</h3>
        <Row className={styles.storeImg} xs={1} md={3} lg={4}>
          {stores.map((store) => (
            <Image
              id={store.id}
              onClick={(e) => setShowModal(true, e.target.id)}
              className='pb-4 rounded'
              src={store.image}
              rounded
            />
          ))}
          <Modal
            store={e.target.id}
            show={showModal}
            onClose={() => setShowModal(false)}
          ></Modal>
        </Row>
      </Container>
    </div>
  );
};

export default StoresList;
