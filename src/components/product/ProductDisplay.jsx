import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import StarRating from './StarRating'
import { CategoryContext } from '../../context/CategoryContext' 
function ProductDisplay({product}) {
     const {addToCart} = useContext(CategoryContext)
  return (
    <div className='productDisplay'>
        <Row>
            <Col lg={5} className='productDisplayLeft '>
                <div className='productImgsList'>
                    <img src={product.image} alt=''/>
                    <img src={product.image} alt=''/>
                    <img src={product.image} alt=''/>
                    <img src={product.image} alt=''/>
                </div>
                <div className='productMainImg'>
                    <img className='mainImg' src={product.image} alt=''/>
                </div>
            </Col>
            <Col lg={7} className='productDisplayRight'>
                <h1>{product.name}</h1>
                <div className='d-flex'>
                  <StarRating />
                  <p>(122)</p>
                </div>
                <div className='productDisplayPrices '>
                    <div className='productDisplayNewPrice'>
                       ${product.old_price}
                    </div>
                    <div className='productDisplayOldPrice'>
                       ${product.new_price}
                    </div>
                </div>
                <div className='productDescription'>
                    Lorem vitae vero eius aliquid. Vel, repellendus autem facere a quisquam eius fugit libero placeat numquam!
                </div>
                <p>Select Size</p>
                <div className='productSize'>
                    <span>S</span>
                    <span>M</span>
                    <span>L</span>
                    <span>XL</span>
                    <span>XXL</span>
                </div>
                <button className='adddToCartBtn' onClick={()=> addToCart(product.id)} >Add To Cart</button>

            </Col>
        </Row>

    </div>
  )
}

export default ProductDisplay