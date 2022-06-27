import React, { useEffect } from 'react'
import Homepage from '../Homepage';
import { useState } from 'react';
import NavbarHome from './NavbarHome';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import CartForUser from './CartForUser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AppFoHomepage = ( ) => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
 
  toast.configure()

  const handleClick = (items) => {
    if (cart.indexOf(items) !== -1){
      return ( toast("Product added to cart"))}
    setCart([...cart, items]);
  };


  const handleChange = (items, d) => {
    const ind = cart.indexOf(items);
    const arr = cart;
    arr[ind].quantity += d;

    if (arr[ind].quantity === 0) arr[ind].quantity = 1;
    setCart([...arr]);
    
    // useEffect(() => {
    //   console.log('cart change')
    // }, [cart]);

  }
  return (
    <React.Fragment>

      <NavbarHome setShow={setShow} size={cart.length} />
      {
        show ? (
          <Homepage handleClick={handleClick} />
        ) :
          (<CartForUser cart={cart} setCart={setCart} handleChange={handleChange} />)
      }

      {/* <Footer /> */}


    </React.Fragment>
  )
}

export default AppFoHomepage