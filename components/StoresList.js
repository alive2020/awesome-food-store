import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ModalOwn from './Modal';

const StoresList = ({ stores }) => {
  const [state, setState] = useState(null);
  console.log(state);
  return (
    <div className='main'>
      <Container className='imgsContainer'>
        <h3 className='mt-5 text-center'>Our Stores</h3>
        <Row xs={1} md={3} lg={4}>
          {stores.map((store) => (
            <img
              id={store.id}
              onClick={(e) => setState(store)}
              className='mt-4 images'
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
          display: state != null ? 'flex' : 'none',
          top: 0,
          width: '100vh',
          height: '100vh',
          background: '#f5f5f5',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ModalOwn store={state} onClose={() => setState(null)} />
      </div>
    </div>
  );
};

export default StoresList;
