import React, { useContext } from 'react'
import Col from 'react-bootstrap/esm/Col'
import { Link } from 'react-router-dom'
import { MdAddShoppingCart } from "react-icons/md";
import { CategoryContext } from '../../context/CategoryContext';

function Item(props) {
   const {addToCart} = useContext(CategoryContext)
  return (
    <Col lg={3} md={4} sm={6} className='item'>
        <div className='itemChild m-3 shadow-lg my-5'>
         <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.img} alt='product' /></Link>
         <div className='itemContent'>
         <p>{props.name}</p>
         <div className='d-flex justify-content-between'>
 
         <div className='prices'>
             <span className='newPrice'>
                ${props.newPrice}
             </span>
             <span className='oldPrice'>
                ${props.oldPrice}
             </span>
         </div>
             <div className='addToCartIcon'>
                <MdAddShoppingCart onClick={() => addToCart(props.id)} />
             </div>
         </div>
         </div>
        </div>
    </Col>
  )
}

export default Item