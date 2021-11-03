import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

const StoreNav = function () {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='/'>Awesome Food Store</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto my-2 my-lg-0'>
            <Nav.Link href='/about'>About</Nav.Link>
            <Nav.Link href='/store'>Store</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <Nav
    //   className='justify-content-center'
    //   activeKey='/home'
    //   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    // >
    //   <Nav.Item>
    //     <Nav.Link href='/home'>About</Nav.Link>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <Nav.Link href='/store'>Store</Nav.Link>
    //   </Nav.Item>
    //   <span>
    //     <a href='/'>Awesome Food Store</a>
    //   </span>
    // </Nav>
    // <div>
    //   <nav className='justify-content-end' activeKey='/home'>
    //     <ul>
    //       {/* <li>
    //            <Link href='/'>Home</Link>
    //        </li> */}
    //       <li>
    //         <Link href='about'>About</Link>
    //       </li>
    //       <li>
    //         <Link href='#'>Store</Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </div>
  );
};

export default StoreNav;
