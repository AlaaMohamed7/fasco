import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import { BsFillTrash3Fill } from "react-icons/bs";
import { CategoryContext } from '../../context/CategoryContext';


function CartItem(props) {
     const {id,name,image,new_price} = props.product
     const {cartItems,addToCart,removeFromCart,deleteProduct} = useContext(CategoryContext)
  return (
    <div className='cartItem'>
        <Row>
            <hr />
            <Col lg={5}>
                <div className='d-flex'>
                    <img className='cartItemImg' src={image} />
                    <p className='cartItemName'>{name}</p>
                </div>
            </Col>
            <Col col lg={6} className='cartItemDetails d-flex justify-content-evenly align-items-center'>
                <p>${new_price}</p>
                <div className='quantity d-flex align-items-center'>
                    <button onClick={() => removeFromCart(id)}>-</button>
                    <div>{cartItems[id]}</div>
                    <button onClick={() => addToCart(id)}>+</button>
                </div>
                <p className='cartItemTotalPrice'>${new_price*cartItems[id]}</p>
                <BsFillTrash3Fill className='CartRemoveIcon' onClick={() => deleteProduct(id)}  />
            </Col>
        </Row>
    </div>
  )
}

export default CartItem