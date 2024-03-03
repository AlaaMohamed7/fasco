import React from 'react'
import { useContext } from 'react'
import { CategoryContext } from '../../context/CategoryContext'
import { Container, Row } from 'react-bootstrap'
import Item from '../item/Item'

function Cattegory(props) {
  const {allProduct} = useContext(CategoryContext)
  return (
    <div className='categoryPage'>
      <Container>
         <img className='banner' src={props.banner} alt='' />
         <div className='indexSort'>
           <b>Showing 1-12</b>
           <b>out of 36 Products</b>
         </div>
         <div>
          <Row>
            {allProduct.map((item,i) =>{
              if(props.category === item.category) {
                return <Item key={i} id={item.id} name={item.name} img={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
              }
            })
            }
          </Row>
         </div>
      </Container>

    </div>
  )
}

export default Cattegory