import React from 'react'
import { Row } from 'react-bootstrap'
import data from '../assets/data'
import Item from '../item/Item'

function RelatedProducts() {
  return (
    <div className='relatedProducts'>
        <div className='productsTitle text-center py-5'>
            <h2>Related Products</h2>
            <div></div>
        </div>
        <Row>
            {data.map((item,i) => {
                return <Item key={i} id={item.id} name={item.name} img={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
            })}
        </Row>
    </div>
  )
}

export default RelatedProducts