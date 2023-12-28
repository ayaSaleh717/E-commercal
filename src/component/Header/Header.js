import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./header.css"
// import { store } from '../../redux/app/store';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { Dispatch } from '@reduxjs/toolkit';
// import { addToCart } from '../../redux/feature/authslice';

function Header() {

 const {cart} = useSelector((state)=>state.allCart);
 console.log(cart)
  
  return (
    <>
      <Navbar className="nav_main">
        <Container className=''>
        <NavLink to="/" className="text-decoration-none text-light mx-2">
                    <h3 className='text-dark'>Ecommerce</h3>
                </NavLink>
          <NavLink to="/cart" className="text-decoration-none text-dark mx-2" >
          <div id='ex4'>
            <spam className='p1 fa-stack fa-2x has-badge' data-count={cart.length}>
            <i class="fa-solid fa-cart-shopping"></i>
            </spam>
          </div>
          </NavLink>
        </Container>
      </Navbar>
      <br />
      
    </>
  )
}

export default Header