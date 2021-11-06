import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const ModalOwn = ({ onClose, store }) => {
  if (store === null) return null;
  return (
    <div className='modalContainer'>
      <Row>
        <img alt='image' src={store.image} className='modalImg' />
        <div className='modalText'>
          <h2 className='mt-5 text-uppercase font-weight-bold'>{store.name}</h2>
          <p className='mt-5'>{store.description}</p>
          {store.url && (
            <a className='mt-3' target='_blank' href={store.url}>
              <i class='fas fa-link'></i>
              {store.url}
            </a>
          )}
        </div>
        <button
          onClick={onClose}
          type='button'
          className='modalBtn close'
          aria-label='Close'
        >
          <span aria-hidden='true'>&times;</span>
        </button>
      </Row>
    </div>
  );
};

export default ModalOwn;
