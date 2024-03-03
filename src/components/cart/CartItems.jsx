import React, { useContext } from 'react'
import { CategoryContext } from '../../context/CategoryContext';
import all_product from '../assets/all_product';
import CartItem from './CartItem';
import { Col, Row } from 'react-bootstrap';

function CartItems() {
  const {cartItems,getTotalAmount} = useContext(CategoryContext)
  const totalPrice = getTotalAmount()
  return (
    <div className='cartItems'>
        <div className='cartItemTitles'>
          <p>Product</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <div className='cartItemsContainer'>
          {all_product.map((item) => {
            if (cartItems[item.id] > 0) {
              return <CartItem product={item} />
            }
          })}
        </div>
        <div className='cartTotalSection'>
          <Row>
            <Col md={6} className='d-flex justify-content-center'>
              <div className='totalPriceBox'>
              <h3 className='py-5'>Cart Totals</h3>
              <div className=''>
                <div className='d-flex justify-content-between'>
                  <p>Subtotal</p>
                  <p>${totalPrice}</p>
                </div>
                <hr />
                <div className='d-flex justify-content-between'>
                  <p>Shipping Free</p>
                  <p>Free</p>
                </div>
                <hr />
                <div className='d-flex justify-content-between'>
                  <b>Total</b>
                  <b>${totalPrice}</b>
                </div>
              </div>
              <button className='checkoutBtn'>Checkout</button>
              </div>
            </Col>
            <Col md={6} className='promoCodeSection'>
              <div className='py-5' >
                <p>If you ave a promo code, enter it here</p>
                <div className='promoCodeSectionBox'>
                  <input type='text' placeholder='promo code' />
                  <button>Submit</button>
               </div>
              </div>
            </Col>
          </Row>
        </div>
    </div>
    
    )
}

export default CartItems