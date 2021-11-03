import React from 'react';
import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
// import Stores from './stores/index';
import StoresList from '../components/StoresList';

function Store({ stores }) {
  return (
    <div className='main'>
      <Head>
        <title>Store</title>
        <meta name='keywords' content='store, stores in seoul' />
      </Head>
      <StoresList stores={stores} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:9000/stores');
  const stores = await res.json();

  return {
    props: {
      stores,
    },
  };
};

export default Store;
