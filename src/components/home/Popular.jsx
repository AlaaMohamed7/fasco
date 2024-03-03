import React from 'react'
import productData from '../assets/data'
import Item from '../item/Item'
import Row from 'react-bootstrap/esm/Row'
import Container from 'react-bootstrap/esm/Container'

function Popular() {
  return (
    <Container>

    <div className='popular'>
        <div className='productsTitle text-center py-5'>
          <h2>Popular In Women</h2>
          <div></div>
        </div>
      <Row className='popularItem'>
        {productData.map((item,i) =>{
          return <Item key={i} id={item.id} name={item.name} img={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
        })}
      </Row>
    </div>
    </Container>
  )
}

export default Popular