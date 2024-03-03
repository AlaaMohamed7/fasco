import React from 'react'
import { Container } from 'react-bootstrap'
import CartItems from '../components/cart/CartItems'
 

function Cart() {
  return (
    <div className='cartPage'>
        <Container>
          <CartItems /> 
        </Container>      
    </div>
  )
}

export default Cart