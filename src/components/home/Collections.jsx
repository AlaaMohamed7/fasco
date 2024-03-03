import React from 'react'
import collectionData from '../assets/new_collections'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Item from '../item/Item'

function Collections() {
  return (
    <div>
        <Container>
            <div className='collection'>
              <div className='productsTitle text-center py-5'>
                <h2>New Collection</h2>
                <div></div>
              </div>
              <Row>
                  {collectionData.map((item,i) => {
                      return <Item key={i} id={item.id} name={item.name} img={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
                    })
                 }
              </Row>
            </div>
        </Container>
    </div>
  )
}

export default Collections