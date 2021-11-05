import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const ModalOwn = ({ onClose, store }) => {
  if (store === null) return null;
  return (
    <div
      style={{
        display: 'block',
        background: '#fff',
        position: 'relative',
        height: '90%',
        width: '70%',
        borderRadius: 10,
      }}
    >
      <Row>
        <img
          alt='image'
          src={store.image}
          style={{
            width: '50%',
            height: '100%',
            resize: 'cover',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
        />
        <div>
          <h3>{store.name}</h3>
          <p>{store.description}</p>
          {store.url && (
            <a target='_blank' href={store.url}>
              <i class='fas fa-link'></i>
              {store.url}
            </a>
          )}
        </div>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 12,
            right: 24,
            width: 10,
            height: 10,
            border: 'none',
            outline: 'none',
            background: 'transparent',
            cursor: 'pointer',
            fontSize:24
          }}
        >
        x
        </button>
      </Row>
    </div>
  );
};

export default ModalOwn;
