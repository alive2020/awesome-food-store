import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
// import StoreItem from './StoreItem';
import styles from '../styles/Stores.module.css';
import ModalOwn from './Modal';

const StoresList = ({ stores }) => {
  const [state, setState] = useState(null);
  console.log(state);
  return (
    <div className={styles.storeImg}>
      <Container fluid>
        <h3 className='text-center'>Our Stores</h3>
        <Row className={styles.storeImg} xs={1} md={3} lg={4}>
          {stores.map((store) => (
            <Image
              id={store.id}
              onClick={(e) => setState(store)}
              className='pb-4 rounded'
              src={store.image}
              rounded
              style={{ cursor: 'pointer' }}
            />
          ))}
        </Row>
      </Container>
      <div
        style={{
          position: 'absolute',
          zIndex: 999,
          display: state!=null ? 'flex' : 'none',
          top: 0,
          width: '100vw',
          height: '100vh',
          background: '#00000060',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ModalOwn
          store={state}
          onClose={() => setState(null)}
        />
      </div>
    </div>
  );
};

export default StoresList;
